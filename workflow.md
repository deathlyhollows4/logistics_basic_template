# Project Workflow

## What Was Done

| Step | Description |
|---|---|
| 1 | Initialized TanStack Start + React + TypeScript + Tailwind CSS v4 project |
| 2 | Built public booking form with server-side validation, honeypot spam protection |
| 3 | Built admin panel: login (scrypt hash auth), booking dashboard, status management, detail modal |
| 4 | Built CSV/XLSX export with time-range filtering (ExcelJS for XLSX, custom CSV escaping) |
| 5 | Fixed XLSX bug: crash on zero bookings (header row was never materialized) |
| 6 | Fixed CSV bug: added UTF-8 BOM for Excel compatibility |
| 7 | Set up Playwright E2E testing (23 tests covering all pages and interactions) |
| 8 | Indexed with GitNexus code intelligence (257 symbols, 479 edges, 21 flows) |
| 9 | Synced to `deathlyhollows4/kind-package-tracker` |

---

## Architecture

```
src/
├── lib/                    # Server-only libraries
│   ├── auth.server.ts      # Admin auth (scrypt hash, HMAC session tokens, cookies)
│   ├── bookings.server.ts  # Booking CRUD (Supabase or local JSON fallback)
│   ├── env.server.ts       # Environment variable readers
│   ├── export.server.ts    # CSV/XLSX generation (ExcelJS)
│   ├── types.ts            # Shared TypeScript types
│   └── validation.ts       # Input validation, export range parser
├── routes/
│   ├── __root.tsx           # Root layout + head metadata
│   ├── index.tsx            # Public landing page with booking form
│   ├── admin/
│   │   ├── login.tsx        # Admin login page
│   │   ├── index.tsx        # Admin dashboard (booking list, status, detail modal)
│   │   └── export.tsx       # Export page (time filter, preview, CSV/XLSX downloads)
│   └── api/
│       ├── bookings.ts      # POST /api/bookings (public)
│       └── admin/
│           ├── login.ts     # POST /api/admin/login
│           ├── logout.ts    # POST /api/admin/logout
│           ├── me.ts        # GET  /api/admin/me (auth check)
│           ├── bookings.ts  # GET + PATCH /api/admin/bookings
│           └── export.ts    # GET  /api/admin/export (CSV/XLSX)
├── components/
│   └── AdminShell.tsx       # Admin layout shell (nav header with Bookings/Export/Logout)
└── styles/
    └── app.css              # Tailwind v4 entry
```

### Key Data Flows

**Public booking submission:**
`index.tsx` form → `POST /api/bookings` → `validation.validateBookingInput()` → `bookings.server.createBooking()` → Supabase or `data/bookings.json`

**Admin dashboard:**
`admin/index.tsx` → `beforeLoad: fetch /api/admin/me` → `GET /api/admin/bookings?range=` → `bookings.server.listBookings(since)`

**Export download:**
`admin/export.tsx` → `GET /api/admin/export?range=&format=` → `bookings.server.listBookings()` → `export.server.bookingsToCsv()` or `bookingsToXlsx()`

---

## Development Workflow

### Start Developing

```bash
npm install
npm run dev          # http://127.0.0.1:3000
```

### Environment Variables (`.env`)

```
ADMIN_EMAIL=vidhantomar2004@gmail.com
ADMIN_PASSWORD_HASH=scrypt:16384:<salt>:<hash>   # Generated via crypto.scryptSync
ADMIN_SESSION_SECRET=<random 64-char secret>
SUPABASE_URL=                           # Leave empty for local JSON fallback
SUPABASE_SERVICE_ROLE_KEY=             # Leave empty for local JSON fallback
```

Generate a password hash:
```bash
node -e "const s=crypto.randomBytes(16).toString('hex');const h=crypto.scryptSync('YOUR_PASS',s,64,{N:16384}).toString('hex');console.log('scrypt:16384:'+s+':'+h)"
```

### Making Changes

1. **Before editing any symbol** — run GitNexus impact analysis:
   ```
   gitnexus_impact({ target: "symbolName", direction: "upstream" })
   ```
   Report blast radius to yourself. HIGH/CRITICAL risk → rethink approach.

2. **Make your edits** — follow existing patterns, no comments unless asked.

3. **Before committing** — run typecheck + GitNexus change detection:
   ```bash
   npm run typecheck
   gitnexus_detect_changes()
   ```

4. **Commit** with a concise message matching repo style:
   ```bash
   git add <changed files>
   git commit -m "fix: description"
   git push origin main
   ```

### Key Rules (from AGENTS.md)

- NEVER edit a function without running `gitnexus_impact` first
- NEVER use find-and-replace for renames — use `gitnexus_rename`
- NEVER commit without running `gitnexus_detect_changes()`
- NEVER ignore HIGH/CRITICAL risk warnings

---

## Testing

### Run All Tests

```bash
# Start dev server first:
npm run dev

# In another terminal:
npx playwright test
```

### Run a Specific Test

```bash
npx playwright test -g "Admin export"
```

### Test Coverage (23 tests)

| Suite | Tests | What it covers |
|---|---|---|
| Landing page | 3 | Hero, services, why choose us, contact, footer |
| Booking form | 4 | Empty validation, successful submit, form reset, honeypot |
| Admin login page | 2 | Form rendering, unauthenticated redirect |
| Admin dashboard | 7 | Status cards, table, filters, refresh, navigation, detail modal, status update, export link |
| Admin export page | 5 | Filters, preview table, CSV/XLSX buttons, button state changes |
| General | 2 | Page title, admin footer link |

### Adding Tests

1. Add tests to `tests/site.spec.ts`
2. For admin-authenticated tests, use `loginAsAdmin(page)` helper (sets cookie via API)
3. Tests run against `http://127.0.0.1:3000` (configured in `playwright.config.ts`)

---

## GitNexus Commands

```bash
npx gitnexus analyze           # Rebuild index after major changes
npx gitnexus analyze --force   # Force full re-index
npx gitnexus status            # Check index freshness
npx gitnexus serve             # Start web UI at http://localhost:4747
npx gitnexus clean --force     # Delete index
```

### In-Chat GitNexus Tools

| Tool | When to use |
|---|---|
| `gitnexus_query` | Find execution flows for a concept |
| `gitnexus_context` | 360° view of a symbol (callers, callees, processes) |
| `gitnexus_impact` | Blast radius before editing |
| `gitnexus_detect_changes` | Verify scope before committing |
| `gitnexus_rename` | Safe multi-file rename |
| `gitnexus_cypher` | Raw graph queries |
| `gitnexus_route_map` | API route ↔ consumer mapping |
| `gitnexus_shape_check` | Response shape vs consumer access mismatch |

---

## Deployment

### Push to GitHub

```bash
git push origin main
```

### Sync to `kind-package-tracker`

```bash
git push https://github.com/deathlyhollows4/kind-package-tracker.git main --force
```

### Deploy (Lovable/Supabase)

1. Import project into Lovable
2. Run `supabase/schema.sql` in Supabase SQL editor
3. Set all environment variables (Supabase URL, admin creds, session secret)
4. Build: `npm run build`

---

## File Structure Notes

| File | Purpose | Commit? |
|---|---|---|
| `.env` | Local admin credentials + secrets | **No** (gitignored) |
| `data/bookings.json` | Local booking store (dev only) | **No** (gitignored) |
| `.claude/`, `AGENTS.md`, `CLAUDE.md` | GitNexus-generated agent files | **No** (untracked) |
| `playwright.config.ts` | Playwright test config | **Yes** |
| `tests/site.spec.ts` | E2E test suite | **Yes** |

---

## Troubleshooting

| Issue | Fix |
|---|---|
| GitNexus index stale | `npx gitnexus analyze` |
| Playwright tests can't connect | Ensure `npm run dev` is running on port 3000 |
| Admin login fails locally | Verify `.env` has correct `ADMIN_PASSWORD_HASH` and `ADMIN_SESSION_SECRET` |
| Export returns 401 | Check cookie: admin session expired (8h max), re-login needed |
| XLSX export crashes | Fixed: now guards against empty bookings array |
| CSV garbled in Excel | Fixed: UTF-8 BOM prepended |
