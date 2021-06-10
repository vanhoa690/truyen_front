import { Chap } from "../../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { ChapListItem } from "./ListItem";
import { ChapFormFields } from "./FormFields";


const ChapPage: React.FC = () => {
  const apiOptions = {};
  const emptyRecord = {
    name: "",
    description: "",
  };

  return (
    <RecordIndex<Chap>
      ListItem={ChapListItem}
      apiPath="chap"
      apiOptions={apiOptions}
      FormFields={ChapFormFields}
      emptyRecord={emptyRecord}
    />

  )
}
export default ChapPage
