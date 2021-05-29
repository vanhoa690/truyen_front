// import Card from "./Card"
import Link from "next/link"
import { useRouter } from 'next/router'


const Story = () => {

  const router = useRouter()
  const { route } = router

  return (
    <>
      <h3 className="text-gray-700 text-3xl font-medium">Story List</h3>
      <Link href={`${route}/add`}>
        <button className="bg-blue-400 py-3 px-4 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">
          Add Story
        </button>
      </Link>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>

              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">123</div>

                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          123123
                        </div>
                        <div className="text-sm leading-5 text-gray-500">
                          123123
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-900">
                      1123123
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      Comic Story
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      v-if="story.completed"
                    >
                      Full
                    </span>
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-green-800"
                      v-else
                    >
                      Updating
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Delete
                    </button>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Story
