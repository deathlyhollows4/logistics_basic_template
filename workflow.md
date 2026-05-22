# Project Workflow

## Next Session — Continue Here

### Status
- **33 tests**, all passing
- **TypeScript**: clean (`tsc --noEmit`)
- **Dev server**: `npm run dev` → `http://127.0.0.1:3000`
- **GitNexus**: 498 nodes, 795 edges, 21 clusters, 39 flows

### First Commands (run on resume)
```bash
npm run dev                          # Start dev server
npx playwright test --reporter=list  # Verify 33/33 pass
npm run typecheck                    # Verify no TS errors
```

### Suggested Tasks (pick one or stack them)
| Priority | Task |
|---|---|
| High | Add service area pages at `/areas/{slug}` (Nigdi, Bhosari, etc. — 10 slugs in `index.tsx:38-49`) |
| Medium | Test at `sm:` breakpoint (640px) — current tests only cover 375/768/1280 |
| Medium | Add focus-visible ring styles to form inputs for keyboard accessibility |
| Low | Add `data/contacts.json` viewer to admin panel (mirrors bookings dashboard) |

---

## What Was Done

| Step | Description |
|---|---|---|
| 1 | Initialized TanStack Start + React + TypeScript + Tailwind CSS v4 project |
| 2 | Built public booking form with server-side validation, honeypot spam protection |
| 3 | Built admin panel: login (scrypt hash auth), booking dashboard, status management, detail modal |
| 4 | Built CSV/XLSX export with time-range filtering (ExcelJS for XLSX, custom CSV escaping) |
| 5 | Fixed XLSX bug: crash on zero bookings (header row was never materialized) |
| 6 | Fixed CSV bug: added UTF-8 BOM for Excel compatibility |
| 7 | Set up Playwright E2E testing (23 tests covering all pages and interactions) |
| 8 | Indexed with GitNexus code intelligence (257 symbols, 479 edges, 21 flows) |
| 9 | Synced to `deathlyhollows4/kind-package-tracker` |
| 10 | Re-analyzed with GitNexus (439 nodes, 719 edges, 18 clusters, 36 flows) |
| 11 | GitNexus web server running at `http://localhost:4747` (background process) |
| 12 | Explored GitNexus dashboard via Playwright — graph, processes (39), communities (20), search, AGENTS.md |
| 13 | Added mobile sticky bottom bar (WhatsApp / Call / Email) visible on landing without scroll |
| 14 | Created `/contact` page with form (name, mobile, email, subject, message) + honeypot |
| 15 | Created `POST /api/contact` endpoint with rate limiting and Supabase/local JSON storage |
| 16 | Added `alert('Our team will reach you soon.')` on both booking and contact form success |
| 17 | Re-analyzed: 495 nodes, 791 edges, 20 clusters, 39 flows |
| 18 | **Removed** `alert()` from QuoteForm and ContactPage — inline `aria-live` messages are sufficient |
| 19 | Added 2 contact page tests: rendering + successful submission |
| 20 | Added 3 mobile viewport tests: MobileBar visibility at 375/768/1280px |
| 21 | Fixed admin E2E auth: created `tests/utils.ts` with cookie-injection helper (no password needed) |
| 22 | Merged `crawl.spec.ts` into `site.spec.ts` (added invalid-credential, logout, CSV/XLSX download tests) |
| 23 | Made Booking/Contact test blocks serial to fix rate-limiting failures |
| 24 | All 33 tests pass, typecheck clean |

---

## Architecture

```
src/
├── lib/                    # Server-only libraries
│   ├── auth.server.ts      # Admin auth (scrypt hash, HMAC session tokens, cookies)
│   ├── bookings.server.ts  # Booking CRUD (Supabase or local JSON fallback)
│   ├── contact.server.ts   # Contact message storage (Supabase or local JSON fallback)
│   ├── env.server.ts       # Environment variable readers
│   ├── export.server.ts    # CSV/XLSX generation (ExcelJS)
│   ├── rate-limit.server.ts # Rate limiting (booking, login, contact)
│   ├── types.ts            # Shared TypeScript types
│   └── validation.ts       # Input validation, export range parser
├── routes/
│   ├── __root.tsx           # Root layout + head metadata
│   ├── index.tsx            # Public landing page with booking form + mobile sticky bar
│   ├── contact.tsx          # Contact form page (name, mobile, email, subject, message)
│   ├── admin/
│   │   ├── login.tsx        # Admin login page
│   │   ├── index.tsx        # Admin dashboard (booking list, status, detail modal)
│   │   └── export.tsx       # Export page (time filter, preview, CSV/XLSX downloads)
│   └── api/
│       ├── bookings.ts      # POST /api/bookings (public)
│       ├── contact.ts       # POST /api/contact (public)
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

**Contact form submission:**
`contact.tsx` form → `POST /api/contact` → `validation.validateContactInput()` → `contact.server.storeMessage()` → Supabase or `data/contacts.json`

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

### Test Coverage (33 tests)

| Suite | Tests | What it covers |
|---|---|---|
| Landing page | 3 | Hero, services, why choose us, contact, footer |
| Booking form | 4 | Empty validation, successful submit, form reset, honeypot **(serial)** |
| Contact page | 3 | Form rendering, successful submit, submit at mobile viewport **(serial)** |
| Admin login page | 3 | Form rendering, unauthenticated redirect, invalid credentials |
| Admin dashboard | 7 | Status cards, table, filters, refresh, navigation, detail modal, status update, export link |
| Admin export page | 7 | Filters, preview table, CSV/XLSX buttons, loading states, CSV/XLSX file downloads |
| Admin logout | 1 | Logout redirects to login |
| General | 2 | Page title, admin footer link |
| Mobile responsive | 3 | MobileBar visible at 375px, hidden at 768px and 1280px |

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
| `tests/site.spec.ts` | E2E test suite (33 tests) | **Yes** |
| `tests/utils.ts` | Test helpers: session cookie generator | **Yes** |

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