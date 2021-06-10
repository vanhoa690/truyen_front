import { useState } from "react"
import ReactQuill from 'react-quill';

// interface Props {
//   title: string
//   name: string
//   value: string
//   onChange(): void
// }

const QuillEditor = (props: any) => {

  const [text, setText] = useState("")

  const { field, form, type, label, placeholder, disabled } = props
  const { name } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  // const handleQuillEditorChange = () => {
  //   const changeEvent = {
  //     target: {
  //       name: name,
  //       value: data
  //     }
  //   }
  //   field.onChange(changeEvent)
  // }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        {label && (
          <label className="text-gray-700" htmlFor={name}>
            {label}
          </label>
        )}
        <ReactQuill value={text} onChange={setText} />

        {/* {showError && <p>{errors[name]}</p>} */}

      </div>
    </div>
  )
}
export default QuillEditor
