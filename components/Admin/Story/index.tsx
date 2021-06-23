import { Story } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { StoryListItem } from "./ListItem"
import { StoryFormFields } from "./FormFields"
import { useState } from "react"
const StoryPage: React.FC = () => {
  const [textSearch, setTextSearch] = useState<string>("")
  const [visibleFilter, setVisibleFilter] = useState<string | boolean>("")
  const [popularFilter, setPopularFilter] = useState<string | boolean>('')
  const [categoryFilter, setCategoryFilter] = useState<string>('')
  const [sort, setSort] = useState<string>('createdAt')
  const [order, setOrder] = useState<string>('desc')

  const apiOptions = {
    title_like: textSearch ? textSearch : null,
    _sort: sort,
    _order: order,
    visible: visibleFilter ? visibleFilter : null,
    popular: popularFilter ? popularFilter : null,
    category: categoryFilter ? categoryFilter : null,
  }
  const emptyRecord = {
    id: '',
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
  }
  const columnsStoryTable = [
    { label: "Id", sortKey: "id" },
    { label: "Title", sortKey: "title" },
    { label: "Slug", sortKey: "slug" },
    { label: "Category", sortKey: "category" },
    { label: "Genres", sortKey: "genres" },
    // { label: "Description", sortKey: "description" },
    { label: "Visible" },
    { label: "Popular" },
    { label: "image" },
    { label: "createdAt", sortKey: "createdAt" },
    // { label: "updatedAt", sortKey: "updatedAt" },
    { label: "Role" }
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
      setVisibleFilter={setVisibleFilter}
      setPopularFilter={setPopularFilter}
      setCategoryFilter={setCategoryFilter}
      sort={sort}
      setSort={setSort}
      order={order}
      setOrder={setOrder}
    />
  )
}
export default StoryPage
