import { Category } from '@/models/Category'
import { Tag } from './Tag'

export type ResourceSubmit = {
  id: string
  name: string
  description: string
  company: {
    name: string,
    id: number | null
  }
  tags: Tag[]
  website: string
  image: string
  imageAlt: string
  category: Category
}
