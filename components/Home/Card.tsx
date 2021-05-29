import React from "react"

interface Props {
  story: any
}

const Card = ({ story }: Props) => {
  // const Card = () => {
  const tags = story.tags.split(",")

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={story.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {story.name}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {story.views}
          </li>
          <li>
            <strong>Number Chap: </strong>
            {story.numberChap}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag: any, index: number) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
