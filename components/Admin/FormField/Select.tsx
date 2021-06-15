import { SelectProps } from "../../../interfaces/PagesProps"
import { Record } from "../../../interfaces/RecordEntities";

export const Select = <T extends Record>({ name, value, options, OptionItem, handleChange }: SelectProps<T>) => {
  // console.log({ value })
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">Parent</label>
        <select name={name} value={value} onChange={handleChange}>
          <option value="">Select</option>
          {options.map(option => (
            <OptionItem record={option} />
            // <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
