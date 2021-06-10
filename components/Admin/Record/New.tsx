import { Record } from "../../../interfaces/RecordEntities";
import { RecordNewProps } from "../../../interfaces/PagesProps";
import { RecordForm } from "./Form";

export const RecordNew = <T extends Record>({
  FormFields,
  activeRecord,
  create,
  success,
}: RecordNewProps<T>) => {
  return (
    <>
      <h2>Add</h2>
      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        submitAction={create}
        success={success}
      />
    </>
  );
};
