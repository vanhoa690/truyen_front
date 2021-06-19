import { useState } from "react";
import { Record } from "../../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../../interfaces/PagesProps";
import { useFetch } from "../../../hooks/useFetchAdmin";
import { RecordList } from "./List";
import { RecordMutations } from "./Mutations";

export const RecordIndex = <T extends Record>({
  apiPath,
  apiOptions,
  ListItem,
  FormFields,
  emptyRecord,
}: RecordIndexProps<T>) => {
  const { records, setVersion, loading, error } = useFetch<T>(
    apiPath,
    apiOptions
  );
  console.log({ records })
  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
  const callback = () => {
    setVersion(+new Date());
    setActiveRecord(emptyRecord);
  };
  return (
    <>
      <RecordList<T>
        ListItem={ListItem}
        records={records}
        emptyRecord={emptyRecord}
        activeRecord={activeRecord}
        setActiveRecord={setActiveRecord}
        loading={loading}
        error={error}
      />
      <RecordMutations
        FormFields={FormFields}
        activeRecord={activeRecord}
        apiPath={apiPath}
        callback={callback}
      />
    </>
  );
};
