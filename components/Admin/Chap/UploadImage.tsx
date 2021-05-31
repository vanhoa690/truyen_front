// import Card from "./Card"
// import { ErrorMessage } from "formik"
import { useState, useRef } from "react"
import helper from "../../helper";
interface Props {
  title: string
  name: string
  value: string
  onChange(): void
}
const UploadImage = (props: any) => {
  const { field, form, type, label, placeholder, disabled } = props
  const { name } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  // const inputRef = useRef(null)

  const [image, setImage] = useState(null)
  const [imageURL, setImageURL] = useState('')
  const [imageName, setImageName] = useState('')

  const removeAvatar = () => {
    setImageURL('')
    setImage(null)
    // if (inputRef) inputRef.current.value = null
  }
  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // uploadAvatar(event)

    helper.onFilePicked(event).then(fileData => {
      setImageURL(fileData.imageURL)
      setImage(fileData.image)
      setImageName(fileData.imageName)
      // const changeEvent = {
      //   target: {
      //     name: name,
      //     value: image
      //   }
      // }
      // form.setFieldValue(changeEvent)
      console.log({ image })
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        {label && (
          <label className="text-gray-700" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          id={name}
          {...field}
          type="file"
          onChange={handleUploadImage}
          accept="image/*"
          value={image}
          // ref="inputRef"
          className={`${showError} ? "is-invalid" : "" w-full mt-2 border border-gray-900`}
        />
        {showError && <p>{errors[name]}</p>}
        {imageURL &&
          <div>
            <button
              onClick={removeAvatar}
              className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
            >Remove Image</button>
            <img src={imageURL} alt="" className="h-32 w-auto" />
          </div>
        }
      </div>
    </div>
  )
}
export default UploadImage
