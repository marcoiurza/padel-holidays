create extension if not exists "pgcrypto";

do $$
begin
  if not exists (select 1 from pg_type where typname = 'booking_status') then
    create type booking_status as enum (
      'enquiry',
      'pending',
      'deposit_pending',
      'deposit_paid',
      'confirmed',
      'balance_pending',
      'balance_paid',
      'cancelled',
      'refunded',
      'comp_hosted',
      'manual_payment',
      'test_booking',
      'waitlisted',
      'abandoned'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'payment_status') then
    create type payment_status as enum ('pending', 'paid', 'failed', 'refunded', 'manual');
  end if;

  if not exists (select 1 from pg_type where typname = 'retreat_status') then
    create type retreat_status as enum ('draft', 'published', 'archived');
  end if;

  if not exists (select 1 from pg_type where typname = 'room_status') then
    create type room_status as enum ('available', 'held', 'assigned', 'unavailable');
  end if;

  if not exists (select 1 from pg_type where typname = 'private_group_lead_status') then
    create type private_group_lead_status as enum ('new', 'contacted', 'proposal_sent', 'won', 'lost');
  end if;

  if not exists (select 1 from pg_type where typname = 'payment_type') then
    create type payment_type as enum ('deposit', 'balance', 'full', 'manual');
  end if;

  if not exists (select 1 from pg_type where typname = 'promo_type') then
    create type promo_type as enum ('percentage', 'fixed');
  end if;

  if not exists (select 1 from pg_type where typname = 'giveaway_status') then
    create type giveaway_status as enum ('draft', 'active', 'closed');
  end if;

  if not exists (select 1 from pg_type where typname = 'media_type') then
    create type media_type as enum ('image', 'video');
  end if;

  if not exists (select 1 from pg_type where typname = 'email_job_status') then
    create type email_job_status as enum ('queued', 'processing', 'sent', 'failed', 'cancelled');
  end if;
end $$;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null default 'super_admin',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists retreats (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  location text not null,
  description text not null,
  teaser text,
  status retreat_status not null default 'draft',
  deposit_percent integer not null check (deposit_percent between 1 and 100),
  balance_due_days integer not null default 60,
  video_url text,
  hero_image text,
  og_image text,
  seo_metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists retreat_dates (
  id uuid primary key default gen_random_uuid(),
  retreat_id uuid not null references retreats(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  max_capacity integer not null,
  status text not null default 'scheduled',
  pricing_phases jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists room_types (
  id uuid primary key default gen_random_uuid(),
  retreat_id uuid not null references retreats(id) on delete cascade,
  name text not null,
  description text,
  occupancy_max integer not null,
  base_price_pence integer not null,
  currency text not null default 'GBP',
  images jsonb not null default '[]'::jsonb
);

create table if not exists rooms (
  id uuid primary key default gen_random_uuid(),
  retreat_date_id uuid not null references retreat_dates(id) on delete cascade,
  room_type_id uuid not null references room_types(id) on delete cascade,
  name text not null,
  status room_status not null default 'available'
);

create table if not exists promo_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  type promo_type not null,
  value integer not null,
  currency text not null default 'GBP',
  max_uses integer,
  uses_count integer not null default 0,
  valid_from timestamptz,
  valid_until timestamptz,
  retreat_id uuid references retreats(id) on delete set null,
  is_affiliate boolean not null default false,
  affiliate_name text,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists add_ons (
  id uuid primary key default gen_random_uuid(),
  retreat_id uuid references retreats(id) on delete set null,
  name text not null,
  description text,
  price_pence integer not null,
  currency text not null default 'GBP'
);

create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  public_id text not null unique,
  retreat_date_id uuid not null references retreat_dates(id) on delete restrict,
  room_id uuid references rooms(id) on delete set null,
  status booking_status not null default 'pending',
  total_pence integer not null,
  deposit_pence integer not null,
  balance_pence integer not null,
  currency text not null default 'GBP',
  coupon_id uuid references promo_codes(id) on delete set null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  stripe_customer_id text,
  stripe_checkout_session_id text,
  admin_notes text not null default '',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists booking_guests (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  is_primary boolean not null default false,
  first_name text not null,
  last_name text not null,
  email text,
  phone text,
  whatsapp text,
  padel_level text,
  dietary_requirements text,
  arrival_date date,
  departure_date date,
  notes text
);

create table if not exists booking_add_ons (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  add_on_id uuid not null references add_ons(id) on delete restrict,
  quantity integer not null default 1,
  price_pence integer not null
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  type payment_type not null,
  amount_pence integer not null,
  currency text not null default 'GBP',
  status payment_status not null default 'pending',
  stripe_payment_intent_id text,
  stripe_checkout_session_id text,
  paid_at timestamptz,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists booking_events (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  utm_snapshot jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists booking_drafts (
  id uuid primary key default gen_random_uuid(),
  email text,
  retreat_date_id uuid references retreat_dates(id) on delete set null,
  room_type_id uuid references room_types(id) on delete set null,
  state jsonb not null default '{}'::jsonb,
  utm_snapshot jsonb not null default '{}'::jsonb,
  consent_snapshot jsonb not null default '{}'::jsonb,
  resume_token text not null unique,
  last_step integer not null default 1,
  expires_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists room_holds (
  id uuid primary key default gen_random_uuid(),
  retreat_date_id uuid not null references retreat_dates(id) on delete cascade,
  room_type_id uuid not null references room_types(id) on delete cascade,
  hold_token text not null unique,
  snapshot jsonb not null default '{}'::jsonb,
  expires_at timestamptz not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists waitlist_entries (
  id uuid primary key default gen_random_uuid(),
  retreat_date_id uuid not null references retreat_dates(id) on delete cascade,
  room_type_id uuid references room_types(id) on delete set null,
  name text not null,
  email text not null,
  phone text,
  notes text,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists private_group_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  whatsapp text,
  preferred_dates text,
  group_size integer,
  destination text,
  retreat_type text,
  goals text,
  budget_band text,
  notes text,
  status private_group_lead_status not null default 'new',
  source text,
  assigned_to uuid references users(id) on delete set null,
  last_contacted_at timestamptz,
  proposal_sent_at timestamptz,
  won_at timestamptz,
  lost_at timestamptz,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  padel_level text,
  retreat_date_id uuid references retreat_dates(id) on delete set null,
  body text not null,
  rating integer not null check (rating between 1 and 5),
  photo_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists giveaways (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  prize_description text not null,
  prize_image_url text,
  entry_instructions jsonb not null default '[]'::jsonb,
  deadline timestamptz,
  status giveaway_status not null default 'draft',
  seo_metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists giveaway_email_captures (
  id uuid primary key default gen_random_uuid(),
  giveaway_id uuid not null references giveaways(id) on delete cascade,
  email text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists content_blocks (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  block_key text not null,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default timezone('utc', now()),
  unique (page_slug, block_key)
);

create table if not exists media_assets (
  id uuid primary key default gen_random_uuid(),
  filename text not null,
  url text not null,
  type media_type not null,
  context jsonb not null default '{}'::jsonb,
  alt_text text not null default '',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists email_jobs (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  recipient_email text not null,
  template_key text not null,
  payload jsonb not null default '{}'::jsonb,
  idempotency_key text not null unique,
  scheduled_for timestamptz not null,
  status email_job_status not null default 'queued',
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists admin_audit_events (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references bookings(id) on delete cascade,
  actor_id uuid references users(id) on delete set null,
  action text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_bookings_retreat_date on bookings(retreat_date_id);
create index if not exists idx_bookings_status on bookings(status);
create index if not exists idx_booking_drafts_resume_token on booking_drafts(resume_token);
create index if not exists idx_room_holds_expires_at on room_holds(expires_at);
create index if not exists idx_email_jobs_scheduled_for on email_jobs(scheduled_for, status);
create index if not exists idx_group_leads_status on private_group_leads(status);

alter table bookings enable row level security;
alter table booking_drafts enable row level security;
alter table private_group_leads enable row level security;

create policy "service role full access bookings"
  on bookings
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create policy "service role full access booking drafts"
  on booking_drafts
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create policy "service role full access group leads"
  on private_group_leads
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
