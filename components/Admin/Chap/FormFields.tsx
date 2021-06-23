import { useFetch } from "../../../hooks/useFetchAdmin"
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Genre, Chap, Story } from "../../../interfaces/RecordEntities"
import { Input, Select, TinyMCEForm } from "../FormField"
import { useState, useEffect } from "react"

type IProps = FormFieldsProps<Chap>

export const ChapFormFields: React.FC<IProps> = ({
  formState,
  handleChange
}) => {
  const storiesFetch = useFetch<Story>("stories")
  const genresFetch = useFetch<Genre>("genres")

  const [des, setDesc] = useState<string>(formState.description)
  useEffect(() => {
    formState.description = des
  }, [des])

  return (
    <>
      <Select
        label="Story"
        name="story"
        value={formState.story ? formState.story : ""}
        handleChange={handleChange}
        options={storiesFetch.records}
      />
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
      <Select
        label="Genre"
        name="genre"
        value={formState.genre ? formState.genre : ""}
        handleChange={handleChange}
        options={genresFetch.records}
      />
      <Input
        label="Visible"
        name="visible"
        type="checkbox"
        checked={formState.visible}
        handleChange={handleChange}
      />
      <Input
        label="Popular"
        name="popular"
        type="checkbox"
        checked={formState.popular}
        handleChange={handleChange}
      />
      <TinyMCEForm
        label="Description"
        value={des ? des : ""}
        setDesc={setDesc}
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
