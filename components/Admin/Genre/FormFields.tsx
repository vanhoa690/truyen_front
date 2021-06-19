import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Category } from "../../../interfaces/RecordEntities"
import { Input, Textarea } from "../FormField"

type IProps = FormFieldsProps<Category>

export const CategoryFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {

  return (
    <>
      <Input name={'title'} value={formState.title} handleChange={handleChange} />
      <Textarea name={'description'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
