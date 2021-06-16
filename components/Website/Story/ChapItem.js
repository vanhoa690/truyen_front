import { StarIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { useRouter } from "next/router"
import ChapModal from "./ChapModal"

const MAX_RATING = 5
const MIN_RATING = 4
const ChapItem = ({ id, title, description, storyId }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  )
  // const dispatch = useDispatch();
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm shadow-md">
        <h4 className="my-3">{title}</h4>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-3 text-yellow-500" key={i} />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="flex-grow mt-auto button mx-2"
          >
            Read Now
          </button>
          <button
            onClick={() => router.push(`/${storyId}/${id}`)}
            className="flex-grow mt-auto button mx-2"
          >
            Read More
          </button>
        </div>
      </div>
      <ChapModal
        showModal={showModal}
        setShowModal={setShowModal}
        id={id}
        title={title}
        description={description}
      />
    </>
  )
}
export default ChapItem
