import { Company } from '@/models/db'
import { supabase } from '../supabaseClient'

export const getCompanies = () =>
  supabase
    .from('company')
    .select('*')
    .then(({ data, error }) => {
      if (error) throw error
      return data as Company[]
    })
