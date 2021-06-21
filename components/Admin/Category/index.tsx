import { Category } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { CategoryListItem } from "./ListItem"
import { CategoryFormFields } from "./FormFields"
import { useState } from "react"

const CategoryPage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const apiOptions = { title_like: textSearch }
  const emptyRecord = {
    title: "",
    description: "",
    slug: "",
    titleSeo: "",
    descSeo: "",
    image: "",
    visible: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const columnsCategoryTable = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Slug", sortKey: "slug" },
    { label: "Description", sortKey: "description" },
    { label: "Visible", sortKey: "visible" },
    { label: "image", sortKey: "image" },
    { label: "createdAt", sortKey: "createdAt" },
    { label: "updatedAt", sortKey: "updatedAt" },
    { label: "Role", sortKey: "role" }
  ]

  return (
    <RecordIndex<Category>
      columns={columnsCategoryTable}
      ListItem={CategoryListItem}
      apiPath="categories"
      apiOptions={apiOptions}
      FormFields={CategoryFormFields}
      emptyRecord={emptyRecord}
      textSearch={textSearch}
      setTextSearch={setTextSearch}
    />
  )
}
export default CategoryPage
