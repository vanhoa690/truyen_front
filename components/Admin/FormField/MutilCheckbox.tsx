import { MutilCheckboxProps } from "../../../interfaces/PagesProps"
import { Genre } from "../../../interfaces/RecordEntities"

export const MutilCheckbox = ({
  label,
  value,
  options,
  setGenresCheck,
}: MutilCheckboxProps<Genre>) => {
  const handleSingleCheck = (genreId: string) => {
    let newData = [...value]

    const index = newData.findIndex(v => v === genreId)

    if (index >= 0) {
      newData.splice(index, 1)
    } else {
      newData.push(genreId)
    }
    setGenresCheck(newData)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{label}</label>
        {options.map(genre => (
          <div key={genre.id}>
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600 ml-5"
              checked={value.includes(genre.id) ? true : false}
              onChange={() => handleSingleCheck(genre.id)}
            />
            <label className="text-gray-700 ml-2">{genre.title}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
