import SidebarLink from "./SidebarLink"
import Link from "next/link"
const BASE_ADMIN_URL = "/admin"
const links = [
  // { name: "Admin", path: `${BASE_ADMIN_URL}/` },
  { name: "Category", path: `${BASE_ADMIN_URL}/category` },
  { name: "Story", path: `${BASE_ADMIN_URL}/story` },
  { name: "Chap", path: `${BASE_ADMIN_URL}/chap` }
]
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

      <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="text-white text-2xl mx-2 font-semibold">
                  Admin Truyennho
                </span>
              </a>
            </Link>
          </div>
        </div>

        <nav className="mt-10">
          <Link href="/admin">
            <a className="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor"
                />
                <path
                  d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                  fill="currentColor"
                />
              </svg>

              <span className="mx-4">Dashboard</span>
            </a>
          </Link>
          {links &&
            links.map((link: any, index: number) => (
              <SidebarLink link={link} key={index} />
            ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
