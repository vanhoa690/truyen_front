import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import CKEditor from "@ckeditor/ckeditor5-react"
import { useState } from "react"

// interface Props {
//   title: string
//   name: string
//   value: string
//   onChange(): void
// }

const CKEditorHTML = (props: any) => {

  const [text, setText] = useState("")

  const { field, form, type, label, placeholder, disabled } = props
  const { name } = field
  const { touched } = form
  // const { errors, touched } = form
  // const showError = errors[name] && touched[name]

  const handleCKEditorChange = (event: any, editor: any) => {
    const data = editor.getData()
    setText(data)
    const changeEvent = {
      target: {
        name: name,
        value: data
      }
    }
    field.onChange(changeEvent)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        {label && (
          <label className="text-gray-700" htmlFor={name}>
            {label}
          </label>
        )}
        <div className="editor"
        // className={`${showError} ? "is-invalid" : "" editor`}
        >
          <CKEditor
            // id={name}
            {...field}
            editor={ClassicEditor}
            data={text}
            onChange={handleCKEditorChange}
          // onChange={(event: any, editor: any) => {
          //   const data = editor.getData()
          //   setText(data)
          // }}
          />
        </div>
        {/* <textarea
          id={name}
          {...field}
          className={`${showError} ? "is-invalid" : "" w-full resize-none border rounded-md`}
        >
        </textarea> */}
        {/* {showError && <p>{errors[name]}</p>} */}

      </div>
    </div>
  )
}
export default CKEditorHTML
