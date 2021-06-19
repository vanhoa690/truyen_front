import { Category } from "../../../interfaces/RecordEntities"
import { RecordIndex } from "../Record"
import { CategoryListItem } from "./ListItem"
import { CategoryFormFields } from "./FormFields"

const CategoryPage: React.FC = () => {
  const apiOptions = {}
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

  return (
    <RecordIndex<Category>
      ListItem={CategoryListItem}
      apiPath="categories"
      apiOptions={apiOptions}
      FormFields={CategoryFormFields}
      emptyRecord={emptyRecord}
    />
  )
}
export default CategoryPage
