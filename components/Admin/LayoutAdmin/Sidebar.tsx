import Link from "next/link"
import { Page, usePage } from "../../../contexts/Page"

const BASE_ADMIN_URL = "/admin"

const Sidebar = () => {
  const { page, setPage } = usePage()

  const pageLink = (pageName: Page) => {
    return (
      <span
        className={`${pageName === page
          ? "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
          : "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
          } flex items-center duration-200 mt-4 py-2 px-6 border-l-4 cursor-pointer`}
        onClick={() => setPage(pageName)}
      >
        {pageName}
      </span>
    )
  }

  return (
    <div className="flex">
      <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

      <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <Link href="/admin">
              <a>
                <span className="text-white text-2xl mx-2 font-semibold">
                  Admin Truyennho
                </span>
              </a>
            </Link>
          </div>
        </div>

        <nav className="mt-10">
          {pageLink(Page.Genre)}
          {pageLink(Page.Category)}
          {pageLink(Page.Story)}
          {pageLink(Page.Chap)}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
