import { Story } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { StoryListItem } from "./ListItem"
import { StoryFormFields } from "./FormFields"
import { useState } from "react"
const StoryPage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const apiOptions = { title_like: textSearch }
  const emptyRecord = {
    title: "",
    slug: "",
    category: "",
    genres: [],
    description: "",
    titleSeo: "",
    descSeo: "",
    image: "",
    visible: true,
    popular: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const columnsStoryTable = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Slug", sortKey: "slug" },
    { label: "Description", sortKey: "description" },
    { label: "Visible", sortKey: "visible" },
    { label: "Popular", sortKey: "popular" },
    { label: "image", sortKey: "image" },
    { label: "createdAt", sortKey: "createdAt" },
    { label: "updatedAt", sortKey: "updatedAt" },
    { label: "Role", sortKey: "role" }
  ]
  return (
    <RecordIndex<Story>
      columns={columnsStoryTable}
      ListItem={StoryListItem}
      apiPath="stories"
      apiOptions={apiOptions}
      FormFields={StoryFormFields}
      emptyRecord={emptyRecord}
      textSearch={textSearch}
      setTextSearch={setTextSearch}
    />
  )
}
export default StoryPage
