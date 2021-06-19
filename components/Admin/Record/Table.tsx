import { Record } from "../../../interfaces/RecordEntities"
import { TableProps } from "../../../interfaces/PagesProps"
import usePagination from "../../../hooks/usePagination"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

const columns = [
  { label: "Id", sortKey: "id" },
  { label: "Title", sortKey: "title" },
  { label: "Slug", sortKey: "slug" },
  { label: "Description", sortKey: "description" },
  { label: "Visible", sortKey: "visible" },
  { label: "image", sortKey: "image" },
  { label: "createdAt", sortKey: "createdAt" },
  { label: "updatedAt", sortKey: "updatedAt" },
  { label: "Role", sortKey: "role" }
]
export const Table = <T extends Record>({
  records,
  setActiveRecord,
  ListItem
}: TableProps<T>) => {
  const { slicedData, pagination, prevPage, nextPage, changePage } =
    usePagination({ itemsPerPage: 6, data: records, startFrom: 1 })
  return (
    <>
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
              <ListItem record={record} />
              <td className="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a
                  className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                  onClick={() => setActiveRecord(record)}
                >
                  Edit
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
