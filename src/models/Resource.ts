import { Category } from '@/models/Category'
import { Tag } from './Tag'

export type Resource = {
  id: string
  name: string
  description: string
  company: string
  companyUrl: string
  tags: Tag[]
  website: string
  image: string
  imageAlt: string
  category: Category
}
