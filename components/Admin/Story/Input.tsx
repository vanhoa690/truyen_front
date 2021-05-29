// import Card from "./Card"
// import { ErrorMessage } from "formik"

interface Props {
  title: string
  name: string
  value: string
  onChange(): void
}
// Input.defaultProps = {
//   type: "text",
//   label: "",
//   placeholder: "",
//   disabled: false
// }
// const Input = ({ title, name, value, onChange }: Props) => {
const Input = (props: any) => {
  const { field, form, type, label, placeholder, disabled } = props
  const { name } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        {label && (
          <label className="text-gray-700" htmlFor={name}>
            {label}
          </label>
        )}
        {/* <label className="text-gray-700">{title}</label> */}
        <input
          id={name}
          {...field}
          // type={type}
          type="text"
          disabled={disabled}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full mt-2 border border-gray-900"
          // invalid={showError}
        />
        {/* {showError && <p>{errors[name]}</p>} */}
        {/* <ErrorMessage name={name} component={FormFeedback} /> */}
      </div>
    </div>
  )
}
export default Input
