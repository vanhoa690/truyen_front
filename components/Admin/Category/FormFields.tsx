import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Category } from "../../../interfaces/RecordEntities"
import { Input, Textarea } from "../FormField"
import { createSlug } from '../../../utils/createSlug'

const imageDefault = 'https://picsum.photos/id/911/1500/300'

type IProps = FormFieldsProps<Category>

export const CategoryFormFields: React.FC<IProps> = ({
  formState,
  handleChange
}) => {
  console.log({ formState })
  if (formState.slug === '') {
    formState = { ...formState, slug: createSlug(formState.title) }
  }
  if (formState.titleSeo === '') {
    formState = { ...formState, titleSeo: formState.title }
  }
  if (formState.descSeo === '') {
    formState = { ...formState, descSeo: formState.description }
  }
  if (formState.image === '') {
    formState = { ...formState, image: imageDefault }
  }
  return (
    <>
      <Input
        label="Title"
        name="title"
        type="text"
        value={formState.title}
        handleChange={handleChange}
      />
      <Input
        label="Slug"
        name="slug"
        type="text"
        value={formState.slug}
        handleChange={handleChange}
      />
      <Input
        label="Visible"
        name="visible"
        type="checkbox"
        checked={formState.visible}
        handleChange={handleChange}
      />
      <Textarea
        label="Description"
        name="description"
        value={formState.description}
        handleChange={handleChange}
      />
      <Input
        label="TitleSeo"
        name="titleSeo"
        type="text"
        value={formState.titleSeo}
        handleChange={handleChange}
      />
      <Textarea
        label="DescSeo"
        name="descSeo"
        value={formState.descSeo}
        handleChange={handleChange}
      />
      <Input
        label="Image"
        name="image"
        type="text"
        value={formState.image}
        handleChange={handleChange}
      />
    </>
  )
}
