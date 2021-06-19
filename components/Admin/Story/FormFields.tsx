import { useFetch } from '../../../hooks/useFetchAdmin';
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Story, Category } from "../../../interfaces/RecordEntities"
import { Input, Select, Textarea } from "../FormField"
import { CategoryOptionItem } from "./OptionItem"

type IProps = FormFieldsProps<Story>

export const StoryFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {
  const categoriesFetch = useFetch<Category>('categories')
  return (
    <>
      <Select name={'category'} value={formState.category ? formState.category : ''} handleChange={handleChange} options={categoriesFetch.records} OptionItem={CategoryOptionItem} />
      <Input name={'name'} value={formState.title} handleChange={handleChange} />
      <Textarea name={'description'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
