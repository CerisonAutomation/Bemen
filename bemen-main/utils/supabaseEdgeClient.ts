import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

// Throws if Supabase service role env vars are missing for clarity
if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing Supabase service role environment variables');
}

export const supabaseEdge = createClient(supabaseUrl, supabaseServiceRoleKey);
