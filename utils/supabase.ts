import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL: string = process.env.SUPABASE_URL!
const SUPABASE_ANON_KEY: string = process.env.SUPABASE_ANON_KEY!
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase
