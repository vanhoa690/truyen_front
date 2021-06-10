import { Story } from "../../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { StoryListItem } from "./ListItem";
import { StoryFormFields } from "./FormFields";


const StoryPage: React.FC = () => {
  const apiOptions = {};
  const emptyRecord = {
    name: "",
    description: "",
    // category: null,
  };

  return (
    <RecordIndex<Story>
      ListItem={StoryListItem}
      apiPath="story"
      apiOptions={apiOptions}
      FormFields={StoryFormFields}
      emptyRecord={emptyRecord}
    />

  )
}
export default StoryPage
