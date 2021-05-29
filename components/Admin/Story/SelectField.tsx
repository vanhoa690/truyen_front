// import Card from "./Card"
// import { ErrorMessage } from "formik"
import Select from "react-select"

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
const SelectField = (props: any) => {
  const { field, form, options, label, placeholder, disabled } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]

  const selectedOption = options.find(option => option.value === value)

  const handleSelectedOptionChange = selectedOption => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
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
        <Select
          id={name}
          {...field}
          value={selectedOption}
          onChange={handleSelectedOptionChange}
          placeholder={placeholder}
          isDisabled={disabled}
          options={options}
          className={showError ? "is-invalid" : ""}
        />

        {/* <select className="ml-6 border border-gray-900">
          <option></option>
        </select> */}

        {showError && <p>{errors[name]}</p>}
        {/* <ErrorMessage name={name} component={FormFeedback} /> */}
      </div>
    </div>
  )
}
export default SelectField
