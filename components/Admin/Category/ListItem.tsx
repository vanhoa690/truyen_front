import { Category } from '../../../interfaces/RecordEntities';
import { ListItemProps } from '../../../interfaces/PagesProps';
import moment from 'moment'

type IProps = ListItemProps<Category>

export const CategoryListItem: React.FC<IProps> = ({
  record
}) => {
  return (
    <>
      <td className="px-6 py-4 border-b border-gray-200">{record.id}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.title}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.slug}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.description}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.visible}</td>
      <td className="px-6 py-4 border-b border-gray-200">{record.image}</td>
      <td className="px-6 py-4 border-b border-gray-200">{moment(record.createdAt).format("DD MMM YYYY")}</td>
      <td className="px-6 py-4 border-b border-gray-200">{moment(record.updatedAt).format("DD MMM YYYY")}</td>
      {/* <div className="text-sm leading-5 text-gray-900">
        {record.title}
      </div>
      <div className="text-sm leading-5 text-gray-900">
        {record.slug}
      </div> */}
    </>
  )
}
