import { supabase } from '../supabaseClient'

export const GetCollections = (id: string) =>
  supabase
    .from('collections')
    .select(
      `
        id,
        created_at,
        name,
        profiles!inner(*),
        resources_collection(*),
        resources_collection:resources(*)
    `
    )
    .eq('profile_id', id)
    .then(({ data, error }) => {
      if (error) throw error
      console.log(data)
      return data
    }) as Promise<any>
