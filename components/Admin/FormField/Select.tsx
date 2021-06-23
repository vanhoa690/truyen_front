import { SelectProps } from "../../../interfaces/PagesProps"
import { Record } from "../../../interfaces/RecordEntities";

export const Select = <T extends Record>({ label, name, value, options, handleChange }: SelectProps<T>) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{label}</label>
        <select name={name} value={value} onChange={handleChange}>
          <option value="">Select</option>
          {options && options.length > 0 && options.map((option) => (
            <option key={option.id} value={option.id}>{option.title}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
