export interface Record {
  id?: number
}
export interface Category extends Record {
  id?: number
  title: string
  slug: string
  description: string
  titleSeo: string
  descSeo: string
  image: string
  visible: boolean
  createdAt?: Date
  updatedAt?: Date
  // stories?: Story[]
}
export interface Story extends Record {
  id?: number
  title: string
  slug: string
  description: string
  titleSeo: string
  descSeo: string
  image: string
  visible: boolean
  createdAt?: Date
  updatedAt?: Date
  category?: string | null
  // category?: Category | null
}
export interface Chap extends Record {
  id?: number
  title: string
  description: string
  story?: string | null
  createdAt?: Date
  updatedAt?: Date
  // story?: Story | null
}
