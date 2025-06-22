import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fqxorphmoubhevdbuhlx.supabase.co";
const supabaseAnonKey =import.meta.env.VITE_REACT_APP_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
