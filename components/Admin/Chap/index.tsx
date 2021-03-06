import { Chap } from "../../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { ChapListItem } from "./ListItem";
import { ChapFormFields } from "./FormFields";


const ChapPage: React.FC = () => {
  const apiOptions = {};
  const emptyRecord = {
    title: "",
    description: "",
  };

  return (
    <RecordIndex<Chap>
      ListItem={ChapListItem}
      apiPath="chaps"
      apiOptions={apiOptions}
      FormFields={ChapFormFields}
      emptyRecord={emptyRecord}
    />

  )
}
export default ChapPage
