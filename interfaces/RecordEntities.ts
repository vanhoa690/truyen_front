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
  createdAt?: number
  updatedAt?: number
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
  createdAt?: number
  updatedAt?: number
  category?: string | null
  // category?: Category | null
}
export interface Chap extends Record {
  id?: number
  title: string
  description: string
  story?: string | null
  // story?: Story | null
}
