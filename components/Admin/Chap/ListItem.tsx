import { Chap } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"
import moment from "moment"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid"

type IProps = ListItemProps<Chap>

export const ChapListItem: React.FC<IProps> = ({ record, update }) => {
  return (
    <>
      <td className="px-6 py-4 border-b border-gray-200">{record.id}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.title}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.slug}</td>
      <td className="px-6 py-4 border-b border-gray-200 line-clamp-5">
        {record.description}
      </td>
      <td className="px-6 py-4 border-b border-gray-200" onClick={() => {
        update({ ...record, visible: !record.visible })
      }}>
        {record.visible ? (
          <CheckCircleIcon className="text-green-500 h-5" />
        ) : (
          <XCircleIcon className="text-red-500 h-5" />
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-200" onClick={() => {
        update({ ...record, popular: !record.popular })
      }}>
        {record.popular ? (
          <CheckCircleIcon className="text-green-500 h-5" />
        ) : (
          <XCircleIcon className="text-red-500 h-5" />
        )}
      </td>
      <td className="px-6 py-4 border-b border-gray-200">{record.image}</td>
      <td className="px-6 py-4 border-b border-gray-200">
        {moment(record.createdAt).format("DD MMM YYYY")}
      </td>
      <td className="px-6 py-4 border-b border-gray-200">
        {moment(record.updatedAt).format("DD MMM YYYY")}
      </td>
    </>
  )
}
