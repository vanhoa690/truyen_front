export interface Record {
  id?: number
}
export interface Category extends Record {
  id?: number
  title: string
  desc: string
  stories?: Story[]
}
export interface Story extends Record {
  id?: number
  title: string
  desc: string
  category?: Category | null
}
export interface Chap extends Record {
  id?: number
  title: string
  desc: string
  story?: Story | null
}
