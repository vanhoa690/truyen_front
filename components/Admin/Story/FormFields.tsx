import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Story } from "../../../interfaces/RecordEntities"
import { Select } from "../FormField"
import { Input } from "../FormField"
import { Textarea } from "../FormField"

type IProps = FormFieldsProps<Story>

export const StoryFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {

  return (
    <>
      <Select name={'category'} value={formState.category ? formState.category.id : ''} handleChange={handleChange} />
      <Input name={'title'} value={formState.name} handleChange={handleChange} />
      <Textarea name={'desc'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
