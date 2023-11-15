import { createClient } from "@supabase/supabase-js";

import { SUPABASE_KEY } from "../../config";

export const supabaseUrl = "https://sjkryzesvqrdrnmyqzva.supabase.co";
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
