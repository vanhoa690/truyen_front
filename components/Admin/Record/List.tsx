import { Record } from "../../../interfaces/RecordEntities"
import { RecordListProps } from "../../../interfaces/PagesProps"
import { usePage } from "../../../contexts/Page"
import { Table } from "./Table"
import { Status } from "./Status"
import { RecordError } from "./RecordError"
// add  more
import { useMutation } from "../../../hooks/useMutation"
import { useEffect } from "react"

export const RecordList = <T extends Record>({
  ListItem,
  records,
  emptyRecord,
  activeRecord,
  setActiveRecord,
  loading,
  error,
  apiPath,
  callback,
  // add more
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
}: RecordListProps<T>) => {
  const { page } = usePage()
  const { update, remove, processing, success, setError } = useMutation<T>(
    apiPath,
    callback
  )
  useEffect(() => {
    if (activeRecord.id) {
      setError(undefined)
    }
  }, [activeRecord, setError])

  return (
    <>
      {error && <RecordError error={error} />}
      <h3 className="text-gray-700 text-3xl font-medium">{page} List</h3>
      <button
        className="bg-blue-400 py-3 px-4 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
        onClick={() => setActiveRecord(emptyRecord)}
      >
        Add New
      </button>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <Table<T>
              records={records}
              setActiveRecord={setActiveRecord}
              ListItem={ListItem}
              update={update}
              remove={remove}
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
          </div>
        </div>
      </div>
    </>
  )
}