import { useState } from "react"
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// interface Props {
//   title: string
//   name: string
//   value: string
//   onChange(): void
// }

const DraftEditor = (props: any) => {
  const initState = EditorState.createEmpty()
  const [text, setText] = useState(initState)

  const { field, form, type, label, placeholder, disabled } = props
  const { name } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  const handleQuillEditorChange = (editorState: any) => {
    setText(editorState)
    // const changeEvent = {
    //   target: {
    //     name: name,
    //     value: data
    //   }
    // }
    // field.onChange(changeEvent)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        {label && (
          <label className="text-gray-700" htmlFor={name}>
            {label}
          </label>
        )}
        <Editor
          editorState={text}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleQuillEditorChange}
        />

        {/* {showError && <p>{errors[name]}</p>} */}

      </div>
    </div>
  )
}
export default DraftEditor
