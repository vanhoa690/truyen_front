import Image from "next/image"
import { MenuIcon, SearchIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"

const Header = ({ categories, categoryId }) => {
  const router = useRouter()

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-1-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg_amazon_blue-light text-while text-sm">
        <p className="link flex items-center" onClick={() => router.push("/")}>
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        {categories.map(category => (
          <p
            className="link"
            key={category.id}
            onClick={() => router.push(`/?categoryId=${category.id}`)}
          >
            {category.title}
          </p>
        ))}
      </div>
    </header>
  )
}

export default Header
