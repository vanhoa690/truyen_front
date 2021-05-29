import StoryForm from "./StoryForm"

const Add = () => {
  const handleSubmit = (values: any) => {
    console.log("Form submit: ", values)
  }

  return <StoryForm onSubmit={handleSubmit} />
}
export default Add
