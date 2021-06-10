import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Category } from "../../../interfaces/RecordEntities"
import { Input } from "../FormField"
import { Textarea } from "../FormField"

type IProps = FormFieldsProps<Category>

export const CategoryFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {

  return (
    <>
      <Input name={'name'} value={formState.name} handleChange={handleChange} />
      <Textarea name={'description'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
