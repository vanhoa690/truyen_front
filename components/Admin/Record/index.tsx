import { useState } from "react"
import { Record } from "../../../interfaces/RecordEntities"
import { RecordIndexProps } from "../../../interfaces/PagesProps"
import { useFetch } from "../../../hooks/useFetchAdmin"
import { RecordList } from "./List"
import { RecordMutations } from "./Mutations"

export const RecordIndex = <T extends Record>({
  apiPath,
  apiOptions,
  ListItem,
  FormFields,
  emptyRecord,
  columns,
  textSearch,
  setTextSearch,
  setVisibleFilter,
  setPopularFilter,
  setStoryFilter,
  setCategoryFilter,
  setSort,
  setOrder,
  order,
  sort
}: RecordIndexProps<T>) => {
  const { records, setVersion, loading, error } = useFetch<T>(
    apiPath,
    apiOptions
  )

  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord)

  const callback = () => {
    setVersion(+new Date())
    setActiveRecord(emptyRecord)
  }
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
        // add more
        apiPath={apiPath}
        callback={callback}
        columns={columns}
        textSearch={textSearch}
        setTextSearch={setTextSearch}
        setVisibleFilter={setVisibleFilter}
        setPopularFilter={setPopularFilter}
        setStoryFilter={setStoryFilter}
        setCategoryFilter={setCategoryFilter}
        setSort={setSort}
        setOrder={setOrder}
        order={order}
        sort={sort}
      />
      <RecordMutations
        FormFields={FormFields}
        activeRecord={activeRecord}
        apiPath={apiPath}
        callback={callback}
      />
    </>
  )
}
