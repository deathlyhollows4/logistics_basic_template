## Problem

The custom domain (and the `.lovable.app` URL) return 502 / "Internal server error". Worker logs show every request crashing with:

```
Error: No such module "h3-v2". imported from "server.js"
  at async serveSSR (...)
```

The custom domain itself is wired up fine — DNS, SSL, and routing all work. The failure is the SSR worker on Lovable Cloud crashing before it can render a response, so every host (custom domain + `kind-package-tracker.lovable.app`) returns 502.

## Root cause

The repo contains a hand-written `server.js` at the project root:

```js
import server from "./dist/server/server.js";
createServer(async (req, res) => { ... }).listen(port, ...);
```

That file is a Node.js HTTP server intended for self-hosting. Lovable's deploy runs on a Cloudflare Worker runtime, not Node — there is no `node:http` server, and the bundled TanStack output ends up trying to import `h3-v2`, which isn't available in that bundle. Result: SSR throws on every request, worker returns 502, browser shows "Internal server error".

`package.json` also has `"start": "node server.js"` pointing at the same file, and `.env.example` / README likely reference self-hosting. None of that is needed for the Lovable Cloud deploy — `tanstackStart()` in `vite.config.ts` already produces the correct worker entry.

## Fix

1. **Delete `server.js`** at the project root.
2. **Remove the `start` script** from `package.json` (the one that runs `node server.js`). Keep `dev`, `build`, `preview`, `typecheck` as-is.
3. Leave `vite.config.ts`, `src/router.tsx`, `src/routes/__root.tsx`, and the rest of the TanStack Start setup untouched — they're correct.
4. After the edits, the project rebuilds automatically. Then **republish** so the new worker bundle (without the bad `server.js` entry) goes live on both `kind-package-tracker.lovable.app` and `logistic.goateddd.com`.
5. Verify by fetching `https://logistic.goateddd.com/` and confirming it returns 200 with the homepage HTML, and that worker logs no longer show the `h3-v2` error.

## Out of scope

- No changes to routes, auth, Supabase, or any feature code.
- No DNS / custom-domain changes — the domain is already correctly attached and verified; once the worker stops crashing it will serve immediately.
- Self-hosting outside Lovable is no longer supported by this repo after the change. If you ever want to self-host again we can re-add a Node adapter with the correct TanStack Start Node preset (not the current hand-rolled file).
