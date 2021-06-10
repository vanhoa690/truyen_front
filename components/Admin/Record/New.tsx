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

      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        submitAction={create}
        success={success}
      />
    </>
  );
};
