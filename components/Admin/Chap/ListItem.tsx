import { Chap } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"
import moment from "moment"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { Page, usePage } from "../../../contexts/Page"

type IProps = ListItemProps<Chap>

export const ChapListItem: React.FC<IProps> = ({ record, update }) => {
  const { setPage } = usePage()

  return (
    <>
      <td className="px-6 py-4 border-b border-gray-200">{record.id}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.title}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.slug}</td>
      <td className="px-6 py-4 border-b border-gray-200 cursor-pointer" onClick={() => setPage(Page.Story)}>{record.story}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.genre}</td>
      {/* <td className="px-6 py-4 border-b border-gray-200 line-clamp-5">
        {record.description}
      </td> */}
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
      <td className="px-6 py-4 border-b border-gray-200">{record.image && (<Image
        src={record.image}
        width={50}
        height={50}
        layout="responsive"
        objectFit="contain"
        alt={record.title}

      />)}</td>
      <td className="px-6 py-4 border-b border-gray-200">
        {moment(record.createdAt).format("DD MMM YYYY")}
      </td>
      {/* <td className="px-6 py-4 border-b border-gray-200">
        {moment(record.updatedAt).format("DD MMM YYYY")}
      </td> */}
    </>
  )
}
