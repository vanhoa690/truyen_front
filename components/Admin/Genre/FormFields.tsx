import { FormFieldsProps } from "../../../interfaces/PagesProps"
import { Genre } from "../../../interfaces/RecordEntities"
import { Input } from "../FormField"

type IProps = FormFieldsProps<Genre>

export const GenreFormFields: React.FC<IProps> = (
  {
    formState,
    handleChange
  }
) => {

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
        label="Genre"
        name="genre"
        type="text"
        value={formState.genre}
        handleChange={handleChange}
      />

    </>
  )
}
