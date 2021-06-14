import { useFetch } from '../../../hooks/useFetch';
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Story, Chap } from "../../../interfaces/RecordEntities"
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
  const storiesFetch = useFetch<Story>('stories')
  return (
    <>
      <Select<Story> name={'story'} value={formState.story ? formState.story : ''} options={storiesFetch.records} handleChange={handleChange} />
      <Input name={'name'} value={formState.name} handleChange={handleChange} />
      <Textarea name={'description'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
