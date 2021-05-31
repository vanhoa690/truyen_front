import { useState } from "react"
import Input from "./Input"
import SelectField from "./SelectField"
import Checkbox from "./Checkbox"
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
      vaule: input.name,
      type: "text"
    },
    {
      title: "Slug",
      name: "slug",
      vaule: input.slug,
      type: "text"
    },
    {
      title: "Description",
      name: "description",
      vaule: input.description,
      type: "text"
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
    value: input.visible
  }

  const initialValues = {
    name: "",
    slug: "",
    storyId: null,
    description: "",
    titleSEO: "",
    descSEO: "",
    image: "",
    visible: true
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required."),
    slug: Yup.string().required("This field is required."),
    description: Yup.string().required("This field is required.")
    // image: Yup.string().required("This field is required.")
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
              name={checkbox.name}
              component={Checkbox}
              label={checkbox.title}
              value={checkbox.value}
              placeholder="..."
            />
            <FastField
              name="storyId"
              component={SelectField}
              label="Story"
              placeholder="What's your photo story?"
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
  )
}
export default CategoryForm
