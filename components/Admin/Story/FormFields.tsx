import { useFetch } from "../../../hooks/useFetchAdmin"
import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Genre, Story, Category } from "../../../interfaces/RecordEntities"
import { Input, Select, Textarea, MutilCheckbox } from "../FormField"
// import { GeOptionItem } from "./OptionItem"

type IProps = FormFieldsProps<Story>

export const StoryFormFields: React.FC<IProps> = ({
  formState,
  handleChange
}) => {
  const genresFetch = useFetch<Genre>("genres")
  const categoriesFetch = useFetch<Category>("categories")
  return (
    <>
      <Select
        label="Category"
        name={"category"}
        value={formState.category ? formState.category : ""}
        handleChange={handleChange}
        options={categoriesFetch.records}
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
      {/* <MutilCheckbox
        label="Genres"
        name={"genres"}
        checked={formState.genres}
        handleChange={handleChange}
        options={genresFetch.records}
      // OptionItem={CategoryOptionItem}
      /> */}

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
