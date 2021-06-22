export interface Record {
  id?: number
  title?: string
}
export interface Genre extends Record {
  id?: number
  title: string
  genre: string
  visible: boolean
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
  genres: string[]
  visible: boolean
  popular: boolean
  createdAt?: Date
  updatedAt?: Date
  category?: string | null
  // category?: Category | null
}
export interface Chap extends Record {
  id?: number
  title: string
  slug: string
  genre: string
  description: string
  image: string
  visible: boolean
  popular: boolean
  createdAt?: Date
  updatedAt?: Date
  story?: string | null
  // story?: Story | null
}
