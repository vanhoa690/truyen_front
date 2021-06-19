import { Story } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { StoryListItem } from "./ListItem"
import { StoryFormFields } from "./FormFields"

const StoryPage: React.FC = () => {
  const apiOptions = {}
  const emptyRecord = {
    title: "",
    slug: "",
    category: "",
    description: "",
    titleSeo: "",
    descSeo: "",
    image: "",
    visible: true,
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
    />
  )
}
export default StoryPage
