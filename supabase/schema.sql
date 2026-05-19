create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  pickup_location text not null,
  drop_location text not null,
  contact_number text not null,
  email text not null,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'completed', 'cancelled')),
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);

alter table public.bookings enable row level security;

drop policy if exists "No direct public reads" on public.bookings;
drop policy if exists "No direct public writes" on public.bookings;

create policy "No direct public reads"
on public.bookings
for select
using (false);

create policy "No direct public writes"
on public.bookings
for insert
with check (false);
