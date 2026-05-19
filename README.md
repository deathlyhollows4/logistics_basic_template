# Lakshya Logistic Packers

Full-stack TanStack Start app for Lakshya Logistic Packers with a public quote form, admin-only booking management, and CSV/XLSX exports.

## Stack

- TanStack Start + TanStack Router
- React + TypeScript
- Tailwind CSS v4
- Supabase/Lovable Cloud backend, with a local JSON-file fallback for development when Supabase secrets are not configured

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development:
   ```bash
   npm run dev
   ```
3. Visit `http://127.0.0.1:3000`.

The local `.env.local` contains the configured admin email and a scrypt hash for the requested admin password. The plaintext password is never used in client code.

## Supabase/Lovable Cloud

Run `supabase/schema.sql` in your Supabase SQL editor, then set:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD_HASH`
- `ADMIN_SESSION_SECRET`

All public reads are denied by RLS. Public visitors submit through the server route only; admin operations are protected server-side.

## Lovable Publish Checklist

1. Import or sync this project into Lovable.
2. Connect Lovable Cloud/Supabase.
3. Run the SQL in `supabase/schema.sql`.
4. Add these secrets in Lovable:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH`
   - `ADMIN_SESSION_SECRET`
5. Use the local `.env.local` hash value only as a secret value. Do not paste the plaintext password into source code.
6. Build command: `npm run build`.

The local JSON booking store is only a development fallback. Production should use Supabase/Lovable Cloud so bookings persist across deploys.
