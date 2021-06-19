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

const imageUpload = {
  title: "imageUpload",
  name: "imageUpload"
  // value: input.imageUpload
}

const UploadImageForm = (props: any) => {
  const { dataInit } = props
  // const inputRef = useRef(dataInit)
  const [image, setImage] = useState(dataInit)
  const [imageURL, setImageURL] = useState("")
  const [imageName, setImageName] = useState("")

  const removeAvatar = () => {
    setImageURL("")
    setImage(null)
    // if (inputRef) inputRef.current.value = null
  }
  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // uploadAvatar(event)

    helper.onFilePicked(event).then(fileData => {
      setImageURL(fileData.imageURL)
      setImage(fileData.image)
      setImageName(fileData.imageName)
    })
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
                <label className="text-gray-700" htmlFor={imageUpload.name}>
                  {imageUpload.title}
                </label>

                <input
                  type="file"
                  // ref="inputRef"
                  name={imageUpload.name}
                  onChange={event => {
                    helper.onFilePicked(event).then(fileData => {
                      setImageURL(fileData.imageURL)
                      setImage(fileData.image)
                      setImageName(fileData.imageName)
                    })
                    formikProps.setFieldValue(
                      imageUpload.name,
                      event.target.files[0]
                    )
                  }}
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
export default UploadImageForm
