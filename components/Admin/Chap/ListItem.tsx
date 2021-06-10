import { Chap } from '../../../interfaces/RecordEntities';
import { ListItemProps } from '../../../interfaces/PagesProps';

type IProps = ListItemProps<Chap>

export const ChapListItem: React.FC<IProps> = ({
  record
}) => {
  return (
    <div className="text-sm leading-5 text-gray-900">
      {record.title}
      {/* {record.story?.name || 'Unkown'} */}
    </div>
  )
}
