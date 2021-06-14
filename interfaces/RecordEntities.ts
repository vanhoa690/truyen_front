export interface Record {
  id?: number
}
export interface Category extends Record {
  id?: number
  name: string
  description: string
  stories?: Story[]
}
export interface Story extends Record {
  id?: number
  name: string
  description: string
  category?: string | null
  // category?: Category | null
}
export interface Chap extends Record {
  id?: number
  name: string
  description: string
  story?: string | null
  // story?: Story | null
}
