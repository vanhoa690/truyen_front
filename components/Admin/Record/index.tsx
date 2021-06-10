import { useState } from "react";
import { Record } from "../../../interfaces/RecordEntities";
import { RecordIndexProps } from "../../../interfaces/PagesProps";
import { useFetch } from "../../../hooks/useFetch";
import { RecordList } from "./List";
import { RecordMutations } from "./Mutations";

export const RecordIndex = <T extends Record>({
  apiPath,
  apiOptions,
  ListItem,
  FormFields,
  emptyRecord,
}: RecordIndexProps<T>) => {
  // const records = [
  //   {
  //     id: 1,
  //     title: "Title 1",
  //     desc: "Desx 1"
  //   },
  //   {
  //     id: 2,
  //     title: "Title 2",
  //     desc: "Desx 2"
  //   },
  // ]
  const { records, setVersion, loading, error } = useFetch<T>(
    apiPath,
    apiOptions
  );
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
