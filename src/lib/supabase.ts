import { createClient } from "@supabase/supabase-js";

// Función para crear el cliente Supabase de forma segura
function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Durante el build time, las variables pueden no estar disponibles
  if (!supabaseUrl || !supabaseAnonKey) {
    // Retornar un cliente "dummy" para el build
    return createClient("https://placeholder.supabase.co", "placeholder-key");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = createSupabaseClient();

export interface EarlyAccessRecord {
  id: number;
  created_at: string;
  email: string | null;
  full_name: string | null;
  company: string | null;
  monthly_budget: string | null;
  notes: string | null;
}
