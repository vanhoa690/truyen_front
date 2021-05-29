// import Card from "./Card"
// interface Props {
//   title: string
//   name: string
//   value: boolean
//   onChange(): void
// }

const Checkbox = (props: any) => {
  const { field, form, label, placeholder, disabled } = props
  const { name, value } = field
  const { errors, touched } = form
  const showError = errors[name] && touched[name]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        {label && (
          <label className="text-gray-700 mr-6" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          id={name}
          {...field}
          // type={type}
          type="checkbox"
          checked={value}
          disabled={disabled}
          placeholder={placeholder}
          className="form-checkbox h-5 w-5 text-gray-600"
          // invalid={showError}
        />
        {/* <input
          name={name}
          value={value}
          checked={value}
          onChange={onChange}
          type="checkbox"
          class="form-checkbox h-5 w-5 text-gray-600"
        /> */}
      </div>
    </div>
  )
}
export default Checkbox
