import { CheckCircleIcon } from "@heroicons/react/solid"

const ChapInfo = ({ chap }) => {
  console.log({ chap })
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 mb-5">
        <CheckCircleIcon className="text-green-500 h-10" />
        <h1 className="text-3xl">{chap.title}</h1>
      </div>
      <div>{chap.description}</div>
      {/* <div dangerouslySetInnerHTML={{ __html: chap.description }}> </div> */}
    </div>
  )
}
export default ChapInfo
