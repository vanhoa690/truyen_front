import { SelectProps } from "../../../interfaces/PagesProps"

const categoriesFetch = [
  {
    id: 1,
    name: "A",
  },
  {
    id: 2,
    name: "b",
  },
]
export const Select = ({ name, value, handleChange }: SelectProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">Category</label>
        <select name={name} value={value} onChange={handleChange}>
          <option value="">Select</option>
          {categoriesFetch.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
