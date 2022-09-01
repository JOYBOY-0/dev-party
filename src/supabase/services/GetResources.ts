import { Resource } from '@/models'
import { supabase } from '../supabaseClient'

export const getResources = () =>
  supabase
    .from<'resources', Resource[]>('resources')
    .select(`*, company(*)`)
    .then(({ data, error }) => {
      if (error) throw error
      console.log(data)
      return data
    }) as Promise<Resource[]>
