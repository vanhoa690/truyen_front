import Link from "next/link"

// import CategoryPage from "../../../pages/admin/category"
// import StoryPage from "../../../pages/admin/story"
// import ChapPage from "../../../pages/admin/chap"

interface Link {
  name:string,
  path:string,
}
interface IProps {
  link: Link
}

const SidebarLink = ({ link }: IProps) => {


  // const renderSwitch = () => {
  //   switch (page) {
  //     case Page.Category:
  //       return <CategoryPage />
  //     case Page.Story:
  //       return <StoryPage />
  //     case Page.Chap:
  //       return <ChapPage />
  //     default:
  //       return ""
  //   }
  // }
  return (
    <Link href={link.path}>
      <a className="flex items-center duration-200 mt-4 py-2 px-6 border-l-4 border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>

        <span className="mx-4">{link.name}</span>
      </a>
    </Link>
  )
}

export default SidebarLink
