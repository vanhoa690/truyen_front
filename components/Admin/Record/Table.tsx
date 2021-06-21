import { Record } from "../../../interfaces/RecordEntities"
import { TableProps } from "../../../interfaces/PagesProps"
import usePagination from "../../../hooks/usePagination"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

export const Table = <T extends Record>({
  records,
  setActiveRecord,
  ListItem,
  update,
  remove,
  columns,
  textSearch,
  setTextSearch
}: TableProps<T>) => {
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({ itemsPerPage: 6, data: records, startFrom: 1 })
  return (
    <>
      <div className="mt-3 flex flex-col sm:flex-row">
        <div className="flex">
          <div className="relative">
            <select className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>5</option>
              <option>10</option>
              <option>20</option>
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
            <select className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
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
                className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                key={index}
              >
                {col.label}
              </th>
            ))}

            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {slicedData.map((record, index) => (
            <tr key={record.id}>
              <ListItem record={record} update={update} />
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
      )}
    </>
  )
}
