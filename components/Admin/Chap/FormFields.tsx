import { useFetch } from "../../../hooks/useFetchAdmin"
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Chap, Story } from "../../../interfaces/RecordEntities"
import { Input, Select, Textarea } from "../FormField"
import { StoryOptionItem } from "./OptionItem"

type IProps = FormFieldsProps<Chap>

export const ChapFormFields: React.FC<IProps> = ({
  formState,
  handleChange
}) => {
  const storiesFetch = useFetch<Story>("stories")
  return (
    <>
      <Select
        name={"category"}
        value={formState.story ? formState.story : ""}
        handleChange={handleChange}
        options={storiesFetch.records}
        OptionItem={StoryOptionItem}
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
      <Textarea
        label="Description"
        name="description"
        value={formState.description}
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
