import { useState, useRef } from "react"
import * as Yup from "yup"
import { FastField, Form, Formik } from "formik"
import helper from "../../../helper"
interface Props {
  title: string
  name: string
  value: string
  onChange(): void
}

const imageMutilUpload = {
  title: "imageMutilUpload",
  name: "imageMutilUpload"
  // value: input.imageUpload
}

const UploadMutilImageForm = (props: any) => {
  // const inputRef = useRef(null)
  const { dataInit } = props
  const [image, setImage] = useState(dataInit)
  const [imageURL, setImageURL] = useState("")
  const [imageName, setImageName] = useState("")

  const removeAvatar = () => {
    setImageURL("")
    setImage(null)
    // if (inputRef) inputRef.current.value = null
  }
  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // helper.onFilePicked(event).then(fileData => {
    //   setImageURL(fileData.imageURL)
    //   setImage(fileData.image)
    //   setImageName(fileData.imageName)
    // })
  }

  return (
    <Formik
      initialValues={dataInit}
      // validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting } = formikProps
        return (
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label
                  className="text-gray-700"
                  htmlFor={imageMutilUpload.name}
                >
                  {imageMutilUpload.title}
                </label>

                <input
                  type="file"
                  multiple
                  name={imageMutilUpload.name}
                  onChange={event =>
                    formikProps.setFieldValue(
                      imageMutilUpload.name,
                      event.target.files
                    )
                  }
                  className=" w-full mt-2 border border-gray-900"
                />
                {imageURL && (
                  <div>
                    <button
                      onClick={removeAvatar}
                      className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
                    >
                      Remove Image
                    </button>
                    <img src={imageURL} alt="" className="h-32 w-auto" />
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
            >
              Upload
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
export default UploadMutilImageForm
