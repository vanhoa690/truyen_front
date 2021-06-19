import { useEffect } from "react"
import { Record } from "../../../interfaces/RecordEntities"
import { RecordFormProps } from "../../../interfaces/PagesProps"
import { useForm } from "../../../hooks/useForm"

export const RecordForm = <T extends Record>({
  FormFields,
  activeRecord,
  submitAction,
  success
}: RecordFormProps<T>) => {
  const { formState, setFormState, handleChange, handleSubmit } = useForm<T>(
    activeRecord,
    submitAction
  )

  useEffect(() => {
    if (activeRecord.id || success) {
      setFormState(activeRecord)
    }
  }, [setFormState, activeRecord, success])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormFields formState={formState} handleChange={handleChange} />
        <button
          type="submit"
          className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
