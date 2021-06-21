import { Genre } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"

type IProps = ListItemProps<Genre>

export const GenreListItem: React.FC<IProps> = ({ record, update }) => {
  return (
    <>
      <td className="px-6 py-4 border-b border-gray-200">{record.id}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.title}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.genre}</td>
    </>
  )
}
