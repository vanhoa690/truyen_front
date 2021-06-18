import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useRouter } from "next/router"

const HomeItem = ({
  id,
  title,
  description,
  category,
  image,
  chapsPopular,
  popular
}) => {
  const router = useRouter()
  let arrayUniqueByKey = []
  if (chapsPopular) {
    const key = "story"
    arrayUniqueByKey = [
      ...new Map(chapsPopular.map(item => [item[key], item])).values()
    ]
  }
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm shadow-md">
      <p className="absolute top-2 right-2 text-xs text-gray-800 ">
        {category}
      </p>
      <div className="relative">
        {image && (
          <Image
            src={image}
            width={1000}
            height={800}
            layout="responsive"
            objectFit="contain"
            alt={title}
            quality={65}
            loading="lazy"
            placeholder="blur"
            blurDataURL={image}
          />
        )}
        <div className="absolute top-0 mt-80 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        {arrayUniqueByKey.map(
          chap =>
            chap.story === id && (
              <h4
                className="mt-2 text-center link text-white p-5 z-10 text-xl tracking-tight font-medium leading-7 absolute bottom-0"
                onClick={() => router.push(`/${id}/${chap.id}`)}
              >
                {chap.title}
              </h4>
            )
        )}
      </div>

      <h4 className="my-3 link">{title}</h4>

      <div className="flex">
        <StarIcon className="h-3 text-yellow-500" />
        <StarIcon className="h-3 text-yellow-500" />
        <StarIcon className="h-3 text-yellow-500" />
        <StarIcon className="h-3 text-yellow-500" />
        <StarIcon className="h-3 text-yellow-500" />
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {popular && (
        <div className="flex items-center space-x-2">
          <Image
            src="/hot-icon.gif"
            width={30}
            height={30}
            objectFit="contain"
            alt={`Story Hot ${title}`}
          />
          <p className="text-xs text-gray-500">TRUYỆN HOT</p>
        </div>
      )}

      <button onClick={() => router.push(`${id}`)} className="mt-auto button">
        Read Now
      </button>
    </div>
  )
}
export default HomeItem
