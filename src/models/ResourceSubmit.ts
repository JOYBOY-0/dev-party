import { CategoryId } from './Category'
import { Tag } from './Tag'

export type ResourceSubmit = {
  id: string
  name: string
  description: string
  company: {
    name: string
    id: string | null
  }
  tags: Tag[]
  website: string
  image: string
  imageAlt: string
  category: CategoryId | null
}
