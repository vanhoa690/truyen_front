import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Chap } from "../../../interfaces/RecordEntities"
import { Select } from "../FormField"
import { Input } from "../FormField"
import { Textarea } from "../FormField"

type IProps = FormFieldsProps<Chap>

export const ChapFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {

  return (
    <>
      <Select name={'category'} value={formState.story ? formState.story.id : ''} handleChange={handleChange} />
      <Input name={'title'} value={formState.name} handleChange={handleChange} />
      <Textarea name={'desc'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
