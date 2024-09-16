import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://opfszxzgozmskidrfxac.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wZnN6eHpnb3ptc2tpZHJmeGFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzOTExMDMsImV4cCI6MjA0MTk2NzEwM30.z5MpzH3HckwD5HdS_xCnn3j-j5vXxF3Rsy4plH2mwoQ";

const supabase = createClient(supabaseUrl, supabaseKey)
  
export default supabase;
