
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vhsaoqtdobzbkumomkeb.supabase.co";
const supabaseKey = "sb_publishable_fFJw50hlPlAtOAUOTcowdQ_YxCTEHr0";

export const supabase = createClient(supabaseUrl, supabaseKey);
