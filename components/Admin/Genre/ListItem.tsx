import { Genre } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid"
type IProps = ListItemProps<Genre>

export const GenreListItem: React.FC<IProps> = ({ record, update }) => {
  return (
    <>
      <td className="px-6 py-4 border-b border-gray-200">{record.id}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.title}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.genre}</td>
      <td
        className="px-6 py-4 border-b border-gray-200"
        onClick={() => {
          update({ ...record, visible: !record.visible })
        }}
      >
        {record.visible ? (
          <CheckCircleIcon className="text-green-500 h-5" />
        ) : (
          <XCircleIcon className="text-red-500 h-5" />
        )}
      </td>
    </>
  )
}
