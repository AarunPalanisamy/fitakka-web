# Backend Implementation Plan: FitAkka

This document serves as a comprehensive prompt for the Comet Assistant to implement the backend for FitAkka.

## 1. Project Context
FitAkka is a fitness habit builder that focuses on streaks, milestones (unlockable cards), and a "no-shame" philosophy. Currently, the project is a Next.js 15+ frontend with a static waitlist form.

## 2. Tech Stack
- **Framework:** Next.js (App Router)
- **Database & Auth:** Supabase
- **Language:** TypeScript
- **Styling:** Tailwind CSS (already configured)

## 3. Database Schema (Supabase)

### Table: `waitlist`
- `id`: uuid (primary key, default: gen_random_uuid())
- `created_at`: timestamptz (default: now())
- `name`: text (required)
- `email`: text (required, unique)
- `city`: text (optional)
- `referral_code`: text (unique, required) - generated on signup
- `referred_by`: text (optional) - the referral code of the person who invited them
- `status`: text (default: 'pending') - e.g., 'pending', 'invited', 'joined'

### Table: `profiles` (Future proofing)
- `id`: uuid (references auth.users, primary key)
- `username`: text (unique)
- `full_name`: text
- `avatar_url`: text
- `updated_at`: timestamptz

### Table: `habits` (Core logic)
- `id`: uuid (primary key)
- `user_id`: uuid (references profiles.id)
- `name`: text (e.g., 'Protein Beast', 'Daily Streak')
- `target_value`: float8
- `unit`: text
- `created_at`: timestamptz

### Table: `logs` (Daily tracking)
- `id`: uuid (primary key)
- `habit_id`: uuid (references habits.id)
- `user_id`: uuid (references profiles.id)
- `date`: date
- `value`: float8
- `completed`: boolean

## 4. Immediate Requirements (Phase 1: Waitlist)

### Task 4.1: Supabase Setup
- Create a `src/utils/supabase/` directory with `client.ts` and `server.ts` to handle Supabase client instantiation for both Client and Server Components.
- Use `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables.

### Task 4.2: Waitlist API / Server Action
- Create a Server Action `joinWaitlist` in `src/app/actions/waitlist.ts`.
- Logic:
  1. Validate input (name, email, city).
  2. Generate a unique 6-character `referral_code` (e.g., "ARUN25").
  3. Check if `referred_by` code exists (if provided).
  4. Insert into `waitlist` table.
  5. Return success and the user's new referral link.

### Task 4.3: Frontend Integration
- Update `src/components/WaitlistSection.tsx` to use the `joinWaitlist` action.
- Show the user's referral link in the success state.
- Handle error states (e.g., email already exists).

## 5. Implementation Prompt for Comet Assistant

> **Comet Assistant Prompt:**
> "Please implement the backend for the FitAkka waitlist. 
> 1. Setup Supabase utilities in `src/utils/supabase/` using the standard Next.js pattern (client and server clients).
> 2. Create a Supabase migration script (SQL) to create the `waitlist` table as defined in `BACKEND.md`.
> 3. Create a Server Action in `src/app/actions/waitlist.ts` that handles form submissions from the WaitlistSection. It should generate a unique referral code for each signup and handle referral tracking if a `ref` parameter is present in the URL.
> 4. Connect the `WaitlistSection.tsx` component to this Server Action, adding loading states and displaying the generated referral link on success.
> 5. Ensure all types are strictly defined in TypeScript."

## 6. Security Rules (RLS)
- `waitlist` table:
  - `anon` can insert (signup).
  - `anon` can select count (to show "X people ahead of you").
  - Service role only for full access.

## 7. Next Steps
- Implement Authentication using Supabase Auth.
- Build the Dashboard for tracking habits.
- Implement the "Streak Card" generation logic based on `logs` and `habits` data.
