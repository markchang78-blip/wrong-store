import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ogyqmdhgrxnvnuotfieg.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'sb_publishable_FveI9vssxrKvSp-gUFXPLg_pHlHPulC'

export const supabase = createClient(supabaseUrl, supabaseKey)
