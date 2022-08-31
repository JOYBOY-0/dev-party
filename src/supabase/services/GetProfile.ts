import { User } from '@/models'
import { supabase } from '../supabaseClient'

export const getProfile = (id: User['id']) => {
  return supabase
    .from<'profiles', User>('profiles')
    .select(
      `
    id,
    created_at,
    username,
    email,
    avatars (
      id,
      code
    )
  `
    )
    .eq('id', id)
    .then(({ data, error }) => {
      if (error) throw error
      console.log(data)
      return data[0]
    })
}
