import { createContext, useContext, useState } from "react"

export enum Page {
  Category = "Category",
  Story = "Story",
  Chap = "Chap"
}

type ContextType = {
  page: Page
  setPage: (page: Page) => void
}

const Context = createContext<ContextType>({
  page: Page.Category,
  setPage: page => console.warn("no page provider")
})

export const usePage = () => useContext(Context)

export const PageStore: React.FC = ({ children }) => {
  const [page, setPage] = useState(Page.Category)
  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  )
}
