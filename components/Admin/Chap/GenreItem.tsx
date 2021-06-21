import { Genre } from "../../../interfaces/RecordEntities"
import { ListItemProps } from "../../../interfaces/PagesProps"

type IProps = ListItemProps<Genre>

export const GenreItem: React.FC<IProps> = ({ record }) => {
  return (
    <option key={record.id} value={record.genre}>{record.title}</option>
  )
}
