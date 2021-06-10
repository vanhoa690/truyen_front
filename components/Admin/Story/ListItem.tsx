import { Story } from '../../../interfaces/RecordEntities';
import { ListItemProps } from '../../../interfaces/PagesProps';

type IProps = ListItemProps<Story>

export const StoryListItem: React.FC<IProps> = ({
  record
}) => {
  return (
    <div className="text-sm leading-5 text-gray-900">
      {record.name}
    </div>
    // <div>
    //   <div className="title">{record.title}</div>
    //   {/* <div className="author">By {record.author?.name || 'Unkown'}</div> */}
    // </div>
  )
}
