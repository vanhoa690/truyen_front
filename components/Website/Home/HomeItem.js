import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/router"

const MAX_RATING = 5
const MIN_RATING = 4
const HomeItem = ({
  id,
  title,
  description,
  category,
  image,
  chapsPopular
}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  )
  const [hasPrime] = useState(Math.random() < 0.5)
  const router = useRouter()

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-sm shadow-md">
      <p className="absolute top-2 right-2 text-xs text-gray-800 ">
        {category}
      </p>
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
      {chapsPopular &&
        chapsPopular.map(
          chap =>
            chap.story === id && (
              <h4
                className="mt-2 text-center link"
                onClick={() => router.push(`/${id}/${chap.id}`)}
              >
                {chap.title}
              </h4>
            )
        )}

      <h4 className="my-3 link">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-3 text-yellow-500" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2">
          <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}

      <button onClick={() => router.push(`${id}`)} className="mt-auto button">
        Read Now
      </button>
    </div>
  )
}
export default HomeItem
