import { Genre } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { GenreListItem } from "./ListItem"
import { GenreFormFields } from "./FormFields"
import { useState } from "react"

const GenrePage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const apiOptions = { title_like: textSearch }
  const emptyRecord = {
    title: "",
    genre: ""
  }
  const columnsGenreTable = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Genre", sortKey: "genre" },
    { label: "Role", sortKey: "role" }
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
    />
  )
}
export default GenrePage
