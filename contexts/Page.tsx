import { createContext, useContext, useState } from "react"

export enum Page {
  Genre = "Genre",
  Category = "Category",
  Story = "Story",
  Chap = "Chap"
}

type ContextType = {
  page: Page
  setPage: (page: Page) => void
}

const Context = createContext<ContextType>({
  page: Page.Chap,
  setPage: page => console.warn("no page provider")
})

export const usePage = () => useContext(Context)

export const PageStore: React.FC = ({ children }) => {
  const [page, setPage] = useState(Page.Chap)
  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  )
}
