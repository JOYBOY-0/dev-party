import { Resource } from './Resource'

export type User = {
  id: string
  email: string
  name: string
  token: string
  favs: Resource['id'][]
}
