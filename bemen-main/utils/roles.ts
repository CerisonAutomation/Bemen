import { supabase } from '@/utils/supabaseClient';

export async function getUserRole() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return 'guest';
  // Assume roles are stored in user_metadata.role
  return user.user_metadata?.role || 'guest';
}

export function isAdmin(role: string) {
  return role === 'admin';
}

export function isClient(role: string) {
  return role === 'client';
}

export function isGuest(role: string) {
  return !role || role === 'guest';
}
