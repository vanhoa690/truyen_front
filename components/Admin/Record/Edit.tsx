import { Record } from "../../../interfaces/RecordEntities"
import { RecordEditProps } from "../../../interfaces/PagesProps"
import { RecordForm } from "./Form"

export const RecordEdit = <T extends Record>({
  FormFields,
  activeRecord,
  update,
  remove,
  success
}: RecordEditProps<T>) => {
  return (
    <>
      <button
        className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
        onClick={() => remove(activeRecord)}
      >
        Remove
      </button>
      <h2>Edit</h2>
      <RecordForm
        FormFields={FormFields}
        activeRecord={activeRecord}
        submitAction={update}
        success={success}
      />
    </>
    // </div>
  )
}
