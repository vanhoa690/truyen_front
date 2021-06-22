import { Genre } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { GenreListItem } from "./ListItem"
import { GenreFormFields } from "./FormFields"
import { useState } from "react"

const GenrePage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const [visibleFilter, setVisibleFilter] = useState<string | boolean>("")
  const apiOptions = {
    title_like: textSearch ? textSearch : null,
    visible: visibleFilter ? visibleFilter : null
  }
  const emptyRecord = {
    title: "",
    genre: "",
    visible: true
  }
  const columnsGenreTable = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Genre", sortKey: "genre" },
    { label: "Visible" },
    { label: "Role" }
  ]

  return (
    <RecordIndex<Genre>
      columns={columnsGenreTable}
      ListItem={GenreListItem}
      apiPath="genres"
      apiOptions={apiOptions}
      FormFields={GenreFormFields}
      emptyRecord={emptyRecord}
      textSearch={textSearch}
      setTextSearch={setTextSearch}
      setVisibleFilter={setVisibleFilter}
    />
  )
}
export default GenrePage
