import { supabase } from '../supabaseClient'

export const GetCompanies = () => supabase.from('company').select('*')
