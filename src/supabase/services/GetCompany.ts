import { supabase } from '../supabaseClient'

export const GetCompany = (id: string) =>
  supabase
    .from('company')
    .select('*')
    .eq('id', id)
    .then(({ data, error }) => {
      if (error) throw error
      return data[0]
    })
