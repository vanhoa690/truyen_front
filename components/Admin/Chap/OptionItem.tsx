import { Story } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"

type IProps = ListItemProps<Story>

export const StoryOptionItem: React.FC<IProps> = ({ record }) => {
  return (
    <option key={record.id} value={record.id}>{record.name}</option>
  )
}
