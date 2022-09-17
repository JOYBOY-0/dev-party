import { Tag } from '@/models'
import { supabase } from '../supabaseClient'

export function getTags () {
  return supabase
    .from('tags')
    .select('*')
    .then(({ data, error }) => {
      if (error) throw error
      return data as Tag[]
    })
}
