import { Category } from "../../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { CategoryListItem } from "./ListItem";
import { CategoryFormFields } from "./FormFields";


const CategoryPage: React.FC = () => {
  const apiOptions = {};
  const emptyRecord = {
    name: "",
    description: "",
  };

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
