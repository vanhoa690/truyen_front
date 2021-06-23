import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Category } from "../../../interfaces/RecordEntities"
import { Input, Textarea, TinyMCEForm } from "../FormField"
import { createSlug } from "../../../utils/createSlug"
import { useState, useEffect } from "react"

const imageDefault = "https://picsum.photos/id/911/1500/300"

type IProps = FormFieldsProps<Category>

export const CategoryFormFields: React.FC<IProps> = ({
  formState,
  handleChange
}) => {
  const [des, setDesc] = useState<string>(formState.description)
  useEffect(() => {
    formState.description = des
  }, [des])
  useEffect(() => {
    formState.slug = createSlug(formState.title)
    formState.titleSeo = formState.title
    formState.descSeo = formState.description
    if (formState.image === "") {
      formState.image = imageDefault
    }
  }, [formState.title, formState.description])
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
      <TinyMCEForm
        label="Description"
        value={des ? des : ""}
        setDesc={setDesc}
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
