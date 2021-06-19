import { InputProps } from "../../../interfaces/PagesProps"

export const Input = ({
  label,
  name,
  type,
  value,
  checked,
  handleChange
}: InputProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{label}</label>
        <input
          type={type}
          autoComplete="off"
          name={name}
          className={`${
            type === "checkbox"
              ? "form-checkbox h-5 w-5 text-gray-600 ml-5"
              : "w-full mt-2 border border-gray-900"
          }`}
          value={value}
          checked={checked}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
