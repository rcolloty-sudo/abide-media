-- Abide admin portal — Phase 0: enquiries
-- Stores every form submission (contact / website brief / app brief) so they can
-- be managed in /admin instead of living only in email.

create table if not exists public.enquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  type        text not null check (type in ('contact', 'website_brief', 'app_brief')),
  name        text,
  email       text,
  business    text,
  topic       text,
  payload     jsonb not null default '{}'::jsonb,
  status      text not null default 'new'
              check (status in ('new', 'in_progress', 'won', 'lost', 'archived')),
  notes       text,
  updated_at  timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_status_idx on public.enquiries (status);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists enquiries_set_updated_at on public.enquiries;
create trigger enquiries_set_updated_at
  before update on public.enquiries
  for each row execute function public.set_updated_at();

-- RLS on, with NO policies for anon/authenticated: the public anon key can neither
-- read nor write this table. All access goes through the service-role key on the
-- server (form inserts + admin reads), which bypasses RLS. The owner is gated at
-- the app layer (middleware + ADMIN_EMAILS allowlist).
alter table public.enquiries enable row level security;
