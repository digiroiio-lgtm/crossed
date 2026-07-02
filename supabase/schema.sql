-- Crossed Database Schema
-- Run this SQL in your Supabase SQL editor to set up the database

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Waitlist table
create table if not exists waitlist (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text unique not null,
  city text,
  use_case text,
  source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamp with time zone default now()
);

-- Enable Row Level Security
alter table waitlist enable row level security;

-- Allow service role full access (used by server-side API)
create policy "Service role full access on waitlist"
  on waitlist
  for all
  to service_role
  using (true)
  with check (true);

-- Allow inserts from anonymous users (waitlist form)
create policy "Allow anon inserts on waitlist"
  on waitlist
  for insert
  to anon
  with check (true);

-- Contacts table
create table if not exists contacts (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text,
  message text,
  created_at timestamp with time zone default now()
);

alter table contacts enable row level security;

create policy "Service role full access on contacts"
  on contacts
  for all
  to service_role
  using (true)
  with check (true);

create policy "Allow anon inserts on contacts"
  on contacts
  for insert
  to anon
  with check (true);

-- Early access invites table
create table if not exists early_access_invites (
  id uuid primary key default uuid_generate_v4(),
  email text,
  invite_code text,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

alter table early_access_invites enable row level security;

create policy "Service role full access on early_access_invites"
  on early_access_invites
  for all
  to service_role
  using (true)
  with check (true);

-- Indexes for performance
create index if not exists waitlist_email_idx on waitlist (email);
create index if not exists waitlist_created_at_idx on waitlist (created_at desc);
create index if not exists waitlist_city_idx on waitlist (city);
create index if not exists waitlist_use_case_idx on waitlist (use_case);
create index if not exists contacts_created_at_idx on contacts (created_at desc);
