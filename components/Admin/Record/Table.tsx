import { Record } from "../../../interfaces/RecordEntities"
import { TableProps } from "../../../interfaces/PagesProps"
const threadData = [
  {
    label: "STT"
  },
  {
    label: "Title"
  },
  {
    label: "Slug"
  }
]
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
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {/* {threadData.map(th => (
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              {th.label}
            </th>
          ))} */}
          {columns.map((col, index) => (
            <th
              className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
              key={index}
            // onClick={() =>
            //   sortHandler(
            //     col.sortKey,
            //     sortByKey === col.sortKey
            //       ? order === "asc"
            //         ? "desc"
            //         : "asc"
            //       : "asc"
            //   )
            // }
            >
              {col.label}
              {/* {sortByKey === col.sortKey && (
                  <span className="icon">
                    {order === "asc" ? (
                      <i className="fas fa-sort-up"></i>
                    ) : (
                      <i className="fas fa-sort-down"></i>
                    )}
                  </span>
                )} */}
            </th>
          ))}

          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {records.map((record, index) => (
          <tr key={record.id}>
            <ListItem record={record} />
          </tr>
          // <tr>
          //   <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
          //     <div className="flex items-center">
          //       <div className="flex-shrink-0 h-10 w-10">{index + 1}</div>
          //     </div>
          //   </td>

          //   <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
          //     <div className="text-sm leading-5 text-gray-900">
          //       <ListItem record={record} />
          //     </div>
          //   </td>

          //   <td className="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
          //     <a
          //       className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
          //       onClick={() => setActiveRecord(record)}
          //     >
          //       Edit
          //     </a>
          //   </td>
          // </tr>
        ))}
      </tbody>
    </table>
  )
}
