import 'server-only';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';
import { getServerEnv } from '@/lib/env';

// Admin Supabase client with the service role key.
// Bypasses Row Level Security — NEVER import this in client components.
// The `server-only` import above enforces this at build time.
export function createAdminClient() {
  const env = getServerEnv();
  return createClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
