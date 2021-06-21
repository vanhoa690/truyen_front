import { Story } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { StoryListItem } from "./ListItem"
import { StoryFormFields } from "./FormFields"
import { StoryTable } from "./Table"

const StoryPage: React.FC = () => {
  const apiOptions = {}
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

  return (
    <RecordIndex<Story>
      ListItem={StoryListItem}
      apiPath="stories"
      apiOptions={apiOptions}
      FormFields={StoryFormFields}
      emptyRecord={emptyRecord}
      Table={StoryTable}
    />
  )
}
export default StoryPage
