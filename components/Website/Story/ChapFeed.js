import { CheckCircleIcon } from "@heroicons/react/solid"
import ChapItem from "./ChapItem"

const ChapFeed = ({ story, chaps }) => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-center space-x-2 mb-5">
        <CheckCircleIcon className="text-green-500 h-10" />
        <h1 className="text-3xl">Danh sách chương truyện {story.title}</h1>
      </div>

      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {chaps.map(({ id, title, description }) => (
          <ChapItem key={id} id={id} title={title} description={description} />
        ))}
      </div>
    </div>
  )
}
export default ChapFeed
