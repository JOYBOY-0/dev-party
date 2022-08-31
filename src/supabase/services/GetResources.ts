import { Resource } from '@/models'
import { supabase } from '../supabaseClient'

export const getResources = () =>
  supabase
    .from<any, Resource[]>('profiles')
    .select('*')
    .then(({ data, error }) => {
      console.log(data)
      console.log(error)
    })
