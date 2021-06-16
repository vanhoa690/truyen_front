import { CheckCircleIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import Link from "next/link"
// import { useState } from "react"

const ChapContent = ({ story, chaps, chap }) => {
  const router = useRouter()
  const index = chaps.findIndex(c => c.id === chap.id)

  return (
    <div>
      <div className="flex items-center justify-center space-x-2">
        <CheckCircleIcon className="text-green-500 h-10" />
        <h1 className="text-3xl">
          <Link href={`/${story.id}`}>
            <a>{story.title}</a>
          </Link>{" "}
          - {chap.title}
        </h1>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className={`button mt-auto mx-2 ${
            index <= 0
              ? "from-gray-300 to-gray-500 border-gray-200 text-gray-300"
              : ""
          } `}
          onClick={() =>
            index > 0 && router.push(`/${story.id}/${chaps[index - 1].id}`)
          }
        >
          Prev
        </button>
        <select onChange={e => router.push(`/${story.id}/${e.target.value}`)}>
          {chaps.map(chap => (
            <option value={chap.id} key={chap.id}>
              {chap.title}
            </option>
          ))}
        </select>
        <button
          className={`button mt-2 mx-2 ${
            index >= chaps.length - 1
              ? "from-gray-300 to-gray-500 border-gray-200 text-gray-300"
              : ""
          } `}
          onClick={() =>
            index < chaps.length - 1 &&
            router.push(`/${story.id}/${chaps[index + 1].id}`)
          }
        >
          Next
        </button>
      </div>
      <div className="p-10 text-justify">{chap.description}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: chap.description }}> </div> */}
    </div>
  )
}
export default ChapContent
