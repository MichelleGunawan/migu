import 'server-only';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

// Returns the authenticated user or null. Does not throw.
export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) return null;
  return user;
}

// Returns the authenticated user or redirects to /login.
// Use in Server Components or layouts that require authentication.
export async function requireUser() {
  const user = await getUser();
  if (!user) redirect('/login');
  return user;
}

// Returns the user's profile row from public.profiles.
export async function getUserProfile() {
  const user = await getUser();
  if (!user) return null;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (error) return null;
  return data;
}
