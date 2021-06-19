import { Category } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"

type IProps = ListItemProps<Category>

export const CategoryOptionItem: React.FC<IProps> = ({ record }) => {
  return (
    <option key={record.id} value={record.id}>{record.title}</option>
  )
}
