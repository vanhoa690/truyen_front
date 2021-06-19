import { useFetch } from '../../../hooks/useFetch';
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Story, Chap } from "../../../interfaces/RecordEntities"
import { Input, Select, Textarea } from "../FormField"
import { StoryOptionItem } from "./OptionItem"

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
      <Select name={'story'} value={formState.story ? formState.story : ''} options={storiesFetch.records} OptionItem={StoryOptionItem} handleChange={handleChange} />
      <Input name={'name'} value={formState.name} handleChange={handleChange} />
      <Textarea name={'description'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
