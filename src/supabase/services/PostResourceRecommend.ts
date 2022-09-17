import { Database } from '@/models/db'
import { supabase } from '../supabaseClient'

export function postResourceRecommend (
  resource: Database['public']['Tables']['submitted']['Insert']
): PromiseLike<any> {
  return supabase
    .from('submitted')
    .insert(resource)
    .then(({ data, error }) => {
      if (error) throw error
      return data
    })
}
