import { Category } from '@/models/Category'

export type Resource = {
  id: string
  name: string
  description: string
  company: string
  companyUrl: string
  tags: number[]
  url: string
  image: string
  imageAlt: string
  category: Category['id']
}
