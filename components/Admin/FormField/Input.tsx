import { InputProps } from "../../../interfaces/PagesProps"

export const Input = ({ name, value, handleChange }: InputProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">Title</label>
        <input
          type="text"
          autoComplete="off"
          name={name}
          className="w-full mt-2 border border-gray-900"
          value={value} onChange={handleChange}
        />
      </div>
    </div>
  )
}