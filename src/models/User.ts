import { Resource } from './Resource'

export type User = {
  id: string
  email: string
  username: string
  avatar_id: number
  token: string
  favs: Resource['id'][]
}
