-- ─── Profiles ─────────────────────────────────────────────────────────────────
-- One row per auth.users entry.
-- Created automatically via trigger on signup.

create table public.profiles (
  id          uuid        primary key references auth.users (id) on delete cascade,
  email       text        not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- ─── Row Level Security ────────────────────────────────────────────────────────

alter table public.profiles enable row level security;

create policy "profiles: select own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles: update own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- No insert policy — rows are created by the trigger with service-role context.
-- No delete policy — deletions cascade from auth.users.

-- ─── Auto-create profile on signup ────────────────────────────────────────────

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute procedure public.handle_new_user();

-- ─── Auto-update updated_at ────────────────────────────────────────────────────

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row
  execute procedure public.handle_updated_at();
