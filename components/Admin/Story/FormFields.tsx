import { useFetch } from '../../../hooks/useFetch';
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Story, Category } from "../../../interfaces/RecordEntities"
import { Select } from "../FormField"
import { Input } from "../FormField"
import { Textarea } from "../FormField"
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
      <Input name={'name'} value={formState.name} handleChange={handleChange} />
      <Textarea name={'description'} value={formState.description} handleChange={handleChange} />
    </>
  )
}
