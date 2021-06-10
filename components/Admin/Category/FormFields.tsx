// import { useFetch } from 'hooks/useFetch';
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Category } from "../../../interfaces/RecordEntities"
import { Input } from "../FormField"
type IProps = FormFieldsProps<Category>

export const CategoryFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {
  // const authorsFetch = useFetch<Author>('authors')

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-gray-700">Title</label>
          <input
            type="text"
            autoComplete="off"
            name="title"
            className="w-full mt-2 border border-gray-900"
            value={formState.title} onChange={handleChange}
          />
        </div>
      </div>
      <Input />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="text-gray-700">Desc</label>
          <input
            type="text"
            autoComplete="off"
            name="desc"
            className="w-full mt-2 border border-gray-900"
            value={formState.desc} onChange={handleChange}
          />
        </div>
      </div>
    </>
  )
}
