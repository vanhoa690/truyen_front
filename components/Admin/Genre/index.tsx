import { Genre } from "../../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { GenreListItem } from "./ListItem";
import { GenreFormFields } from "./FormFields";


const GenrePage: React.FC = () => {
  const apiOptions = {};
  const emptyRecord = {
    title: "",
    genre: "",
  };

  return (
    <RecordIndex<Genre>
      ListItem={GenreListItem}
      apiPath="genres"
      apiOptions={apiOptions}
      FormFields={GenreFormFields}
      emptyRecord={emptyRecord}
    />

  )
}
export default GenrePage
