import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/solid"
import ChapItem from "./ChapItem"

import usePagination from "../../hooks/usePagination"

const ChapFeed = ({ story, chaps }) => {
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({ itemsPerPage: 12, data: chaps, startFrom: 1 })

  return (
    <div className="mt-5">
      <div className="flex items-center justify-center space-x-2 mb-5">
        <CheckCircleIcon className="text-green-500 h-10" />
        <h1 className="text-3xl">Danh sách chương truyện {story.title}</h1>
      </div>

      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {slicedData.map(({ id, title, description }) => (
          <ChapItem
            key={id}
            storyId={story.id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="flex flex-col items-center mt-12 pb-12">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50  cursor-pointer"
            onClick={prevPage}
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {pagination.map(page => {
            if (!page.ellipsis) {
              return (
                <a
                  key={page.id}
                  className={`${
                    page.current
                      ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium  cursor-pointer`}
                  onClick={e => changePage(page.id, e)}
                >
                  {page.id}
                </a>
              )
            } else {
              return (
                <span
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
                  key={page.id}
                >
                  &hellip;
                </span>
              )
            }
          })}
          <a
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50  cursor-pointer"
            onClick={nextPage}
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  )
}
export default ChapFeed
