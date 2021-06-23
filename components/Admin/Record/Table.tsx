import { } from "../../../interfaces/RecordEntities"
import { TableProps } from "../../../interfaces/PagesProps"
import usePagination from "../../../hooks/usePagination"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/solid"
import { useState } from "react"
import { useFetch } from "../../../hooks/useFetchAdmin"
import { Category, Story, Record } from "../../../interfaces/RecordEntities"

export const Table = <T extends Record>({
  records,
  setActiveRecord,
  ListItem,
  update,
  remove,
  // add more
  columns,
  textSearch,
  setTextSearch,
  setVisibleFilter,
  setPopularFilter,
  setStoryFilter,
  setCategoryFilter,
  setSort,
  setOrder,
  order,
  sort
}: TableProps<T>) => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(5)
  let storiesFetch,
    categoriesFetch = null
  if (setStoryFilter) {
    storiesFetch = useFetch<Story>("stories").records
  }
  if (setCategoryFilter) {
    categoriesFetch = useFetch<Category>("categories").records
  }
  const handleSort = (sortKey: string | undefined) => {
    if (setSort && setOrder) {
      setSort(sortKey)
      if (order === "desc") {
        setOrder("asc")
      } else {
        setOrder("desc")
      }
    }
  }
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({ itemsPerPage, data: records, startFrom: 1 })
  return (
    <>
      <div className="mt-3 flex flex-col sm:flex-row">
        <div className="flex">
          <div className="relative">
            <select
              className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={e => setItemsPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              onChange={e => setVisibleFilter(e.target.value)}
            >
              <option value="">All visibles</option>
              <option value={"true"}>Visible</option>
              <option value={"false"}>Invisible</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {setPopularFilter && (
            <div className="relative">
              <select
                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                onChange={e => setPopularFilter(e.target.value)}
              >
                <option value="">All populars</option>
                <option value={"true"}>Popular</option>
                <option value={"false"}>Inpopular</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}

          {setStoryFilter && (
            <div className="relative">
              <select
                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                onChange={e => setStoryFilter(e.target.value)}
              >
                <option value="">All Stories</option>
                {storiesFetch &&
                  storiesFetch.map(story => (
                    <option key={story.id} value={story.id}>
                      {story.title}
                    </option>
                  ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}

          {setCategoryFilter && (
            <div className="relative">
              <select
                className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                onChange={e => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categoriesFetch &&
                  categoriesFetch.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="block relative mt-2 sm:mt-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current text-gray-500"
            >
              <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
            </svg>
          </span>

          <input
            placeholder="Search"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            value={textSearch}
            onChange={e => setTextSearch(e.target.value)}
          />
        </div>
      </div>

      <table className="min-w-full">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort(col.sortKey)}
              >
                <div className="flex">
                  {col.label}
                  {col.sortKey && col.sortKey === sort ? (
                    order === "asc" ? (
                      <ChevronUpIcon className="h-5" />
                    ) : (
                      <ChevronDownIcon className="h-5" />
                    )
                  ) : null}
                </div>
              </th>
            ))}

            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {slicedData.map(record => (
            <tr key={record.id}>
              <ListItem
                record={record}
                update={update}
              />
              <td className="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a
                  className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                  onClick={() => setActiveRecord(record)}
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a
                  className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                  onClick={() => remove(record)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {slicedData.length > 0 && (
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
                    className={`${page.current
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
      )}
    </>
  )
}
