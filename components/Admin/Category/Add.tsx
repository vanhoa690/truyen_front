import CategoryForm from "./CategoryForm"

const Add = () => {
  const handleSubmit = (values: any) => {
    console.log("Form submit: ", values)
  }

  return <CategoryForm onSubmit={handleSubmit} />
}
export default Add
