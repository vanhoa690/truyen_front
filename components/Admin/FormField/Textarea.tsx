import { InputProps } from "../../../interfaces/PagesProps"

export const Textarea = ({ name, value, handleChange }: InputProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">Content</label>
        <textarea
          name={name}
          className="w-full resize-none border rounded-md"
          value={value}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  )
}
