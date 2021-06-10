import { Category } from '../../../interfaces/RecordEntities';
import { ListItemProps } from '../../../interfaces/PagesProps';

type IProps = ListItemProps<Category>

export const CategoryListItem: React.FC<IProps> = ({
  record
}) => {
  return (
    <div>
      <div className="title">{record.title}</div>
      {/* <div className="author">By {record.author?.name || 'Unkown'}</div> */}
    </div>
  )
}
