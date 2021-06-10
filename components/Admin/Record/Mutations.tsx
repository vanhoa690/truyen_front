import { useEffect } from "react";
import { Record } from "../../../interfaces/RecordEntities";
import { RecordMutationsProps } from "../../../interfaces/PagesProps";
import { RecordNew } from "./New";
import { RecordEdit } from "./Edit";
import { useMutation } from "../../../hooks/useMutation";
// import { Status } from "../../components/Status";
// import { RecordError } from "../../components/RecordError";

export const RecordMutations = <T extends Record>({
  FormFields,
  activeRecord,
  apiPath,
  callback,
}: RecordMutationsProps<T>) => {
  const { create, update, remove, processing, error, success, setError } =
    useMutation<T>(apiPath, callback);
  useEffect(() => {
    if (activeRecord.id) {
      setError(undefined);
    }
  }, [activeRecord, setError]);
  return (
    <>
      {/* <RecordNew
        FormFields={FormFields}
        activeRecord={activeRecord}
        create={create}
        remove={remove}
        success={success}
      /> */}
      {activeRecord.id ? (
        <RecordEdit
          FormFields={FormFields}
          activeRecord={activeRecord}
          update={update}
          remove={remove}
          success={success}
        />
      ) : (
        <RecordNew
          FormFields={FormFields}
          activeRecord={activeRecord}
          create={create}
          remove={remove}
          success={success}
        />
      )}
    </>
    // <div className="mutations">
    //   {error && <RecordError error={error} />}
    //   {activeRecord.id ? (
    //     <RecordEdit
    //       FormFields={FormFields}
    //       activeRecord={activeRecord}
    //       update={update}
    //       remove={remove}
    //       success={success}
    //     />
    //   ) : (
    //     <RecordNew
    //       FormFields={FormFields}
    //       activeRecord={activeRecord}
    //       create={create}
    //       remove={remove}
    //       success={success}
    //     />
    //   )}
    //   {processing && <Status text="Processing..." />}
    // </div>
  );
};
