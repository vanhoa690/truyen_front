import Image from "next/image"
import moment from "moment"

const StoryInfo = ({ story }) => {
  return (
    <div
      className="flex flex-col lg:flex-row overflow-hidden
    bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2"
    >
      <div className="lg:w-1/2">
        {story.image && (
          <Image
            src={story.image}
            width={1000}
            height={800}
            layout="responsive"
            objectFit="contain"
            alt={story.title}
            quality={65}
            loading="lazy"
            placeholder="blur"
            blurDataURL={story.image}
          />
        )}
      </div>

      <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-evenly">
        <h3 className="font-semibold text-lg leading-tight truncate">
          {story.title}
        </h3>
        <div
          className="my-2 text-justify"
          dangerouslySetInnerHTML={{ __html: story.description }}
        ></div>
        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
          {story.author} &bull; {moment(story.updatedAt).format("DD MMM YYYY")}
        </p>
      </div>
    </div>
  )
}
export default StoryInfo
