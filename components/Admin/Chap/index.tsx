import { Chap } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { ChapListItem } from "./ListItem"
import { ChapFormFields } from "./FormFields"
import { useState } from "react"

const ChapPage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const [visibleFilter, setVisibleFilter] = useState<string | boolean>('')
  const [popularFilter, setPopularFilter] = useState<string | boolean>('')
  const [storyFilter, setStoryFilter] = useState<string>('')
  const [sort, setSort] = useState<string>('createdAt')
  const [order, setOrder] = useState<string>('desc')

  const apiOptions = {
    title_like: textSearch ? textSearch : null,
    _sort: sort,
    _order: order,
    visible: visibleFilter ? visibleFilter : null,
    popular: popularFilter ? popularFilter : null,
    story: storyFilter ? storyFilter : null,
  }
  const emptyRecord = {
    id: '',
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
    { label: "Visible" },
    { label: "Popular" },
    { label: "image" },
    { label: "createdAt", sortKey: "createdAt" },
    // { label: "updatedAt", sortKey: "updatedAt" },
    { label: "Role" }
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
      setVisibleFilter={setVisibleFilter}
      setPopularFilter={setPopularFilter}
      setStoryFilter={setStoryFilter}
      sort={sort}
      setSort={setSort}
      order={order}
      setOrder={setOrder}
    />
  )
}
export default ChapPage
