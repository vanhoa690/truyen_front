import { useState } from "react"
import Input from "./Input"
import SelectField from "./SelectField"
import { FastField, Form, Formik } from "formik"
import * as Yup from "yup"
const PHOTO_CATEGORY_OPTIONS = [
  { value: 1, label: "Technology" },
  { value: 2, label: "Education" },
  { value: 3, label: "Nature" },
  { value: 4, label: "Animals" },
  { value: 5, label: "Styles" }
]
const CategoryForm = (props: any) => {
  const dataInit = {
    name: "",
    slug: "",
    titleSEO: "",
    description: "",
    descSEO: "",
    image: "",
    visible: true
  }
  const [input, setInput] = useState(Object.assign({}, dataInit))
  const rows = [
    {
      title: "Name",
      name: "name",
      vaule: input.name
    },
    {
      title: "Slug",
      name: "slug",
      vaule: input.slug
    },
    {
      title: "Title SEO",
      name: "titleSEO",
      vaule: input.titleSEO
    },
    {
      title: "Desc SEO",
      name: "descSEO",
      vaule: input.descSEO
    },
    {
      title: "Image",
      name: "image",
      vaule: input.image
    }
  ]
  const checkbox = {
    title: "Visible",
    name: "visible",
    vaule: input.visible
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(input)
  }

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target
    console.log(event.target.name)
    setInput({ ...input, [name]: value })
  }

  const handleCheckbox = (event: any) => {
    const { checked, name } = event.target
    console.log(event.target.name)
    setInput({ ...input, [name]: checked })
  }

  const initialValues = {
    name: "",
    slug: "",
    categoryId: null,
    description: "",
    titleSEO: "",
    descSEO: "",
    image: "",
    visible: true
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required."),
    slug: Yup.string().required("This field is required."),
    description: Yup.string().required("This field is required."),
    image: Yup.string().required("This field is required.")
    // categoryId: Yup.number()
    //   .required('This field is required.')
    //   .nullable(),
    // photo: Yup.string().when('categoryId', {
    //   is: 1,
    //   then: Yup.string().required('This field is required.'),
    //   otherwise: Yup.string().notRequired(),
    // })
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
      // onSubmit={props.onSubmit}
    >
      {formikProps => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps
        // console.log({ values, errors, touched })

        return (
          <Form>
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            {rows &&
              rows.map((row, index) => (
                <FastField
                  name={row.name}
                  component={Input}
                  key={index}
                  label={row.title}
                  placeholder="..."
                />
              ))}
            <button
              type="submit"
              className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
            >
              Add
            </button>
          </Form>
        )
      }}
    </Formik>
    //   <form onSubmit={handleSubmit}>
    //     {rows && rows.map((row, index) => (
    //       <Input title={row.title} name={row.name} value={row.vaule} onChange={handleOnChange} key={index} />
    //     ))}
    //     <Checkbox title={checkbox.title} name={checkbox.name} value={checkbox.vaule} onChange={handleCheckbox} />
    //     <button
    //       className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
    //       type="submit"
    //     >
    //       Add
    //  </button>
    //   </form>
  )
}
export default CategoryForm
