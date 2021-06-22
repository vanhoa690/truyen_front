import { Chap } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { ChapListItem } from "./ListItem"
import { ChapFormFields } from "./FormFields"
import { useState } from "react"

const ChapPage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const apiOptions = {
    title_like: textSearch,
    _sort: "createdAt",
    _order: "desc",
  }
  const emptyRecord = {
    title: "",
    slug: "",
    story: "",
    description: "",
    image: "",
    genre: "",
    visible: true,
    popular: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  const columnsChapTable = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Slug", sortKey: "slug" },
    { label: "Story", sortKey: "story" },
    { label: "Genre", sortKey: "genre" },
    // { label: "Description", sortKey: "description" },
    { label: "Visible", sortKey: "visible" },
    { label: "Popular", sortKey: "popular" },
    { label: "image", sortKey: "image" },
    // { label: "createdAt", sortKey: "createdAt" },
    { label: "updatedAt", sortKey: "updatedAt" },
    { label: "Role", sortKey: "role" }
  ]
  return (
    <RecordIndex<Chap>
      columns={columnsChapTable}
      ListItem={ChapListItem}
      apiPath="chaps"
      apiOptions={apiOptions}
      FormFields={ChapFormFields}
      emptyRecord={emptyRecord}
      textSearch={textSearch}
      setTextSearch={setTextSearch}
    />
  )
}
export default ChapPage
