import { useState } from "react"
import Input from "./Input"
import Textarea from "./Textarea"
import UploadImage from "./UploadImage"
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

  // const { isAddMode } = props;
  const { dataInit } = props

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
    // {
    //   title: "Description",
    //   name: "description",
    //   vaule: input.description
    // },
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
  const textarea = {
    title: "Description",
    name: "description",
    value: input.description
  }
  const imageUpload = {
    title: "imageUpload",
    name: "imageUpload",
    value: input.imageUpload
  }
  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("This field is required."),
    // slug: Yup.string().required("This field is required."),
    // description: Yup.string().required("This field is required."),
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
      initialValues={dataInit}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps
        // console.log({ formikProps })

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
            <FastField
              name={textarea.name}
              component={Textarea}
              label={textarea.title}
            />
            <FastField
              name={imageUpload.name}
              component={UploadImage}
              label={imageUpload.title}
            />
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label className="text-gray-700" htmlFor={imageUpload.name}>
                  {imageUpload.title}
                </label>

                <input type="file"
                  name={imageUpload.name}
                  // onChange={(event) => formikProps.setFieldValue(imageUpload.name, event.target.files[0])}
                  onChange={uploadAvatar}
                  className=" w-full mt-2 border border-gray-900"
                />
              </div>
            </div>

             */}
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
