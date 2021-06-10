import { Category } from "../../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
// import { CategoryListItem } from "./ListItem";
import { CategoryFormFields } from "./FormFields";


const CategoryPage: React.FC = () => {
  const apiOptions = {};
  const emptyRecord = {
    title: "",
    desc: "",
  };

  return (
    <RecordIndex<Category>
      // ListItem={CategoryListItem}
      apiPath="category"
      apiOptions={apiOptions}
      FormFields={CategoryFormFields}
      emptyRecord={emptyRecord}
    />

  )
}
export default CategoryPage
