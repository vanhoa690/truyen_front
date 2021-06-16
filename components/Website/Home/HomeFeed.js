import HomeItem from "./HomeItem"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import usePagination from "../../hooks/usePagination"

const HomeFeed = ({ stories, storiesPopular }) => {
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({ itemsPerPage: 12, data: stories, startFrom: 1 })

  return (
    <div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="md:col-span-2">
          {storiesPopular
            .slice(0, 1)
            .map(({ id, title, description, category, image }) => (
              <HomeItem
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>

        {storiesPopular
          .slice(1, 3)
          .map(({ id, title, description, category, image }) => (
            <HomeItem
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {slicedData.map(({ id, title, description, category, image }) => (
          <HomeItem
            key={id}
            id={id}
            title={title}
            description={description}
            category={category}
            image={image}
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
export default HomeFeed
