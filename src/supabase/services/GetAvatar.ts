import { supabase } from '../supabaseClient'

export const GetAvatar = (id: string) =>
  supabase
    .from('avatars')
    .select('*')
    .eq('id', id)
    .then(({ data, error }) => {
      if (error) throw error
      return data[0]
    })
