import Image from "next/image"
import { MenuIcon, SearchIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import storyApi from "../../../api/storyApi"
import { signIn, signOut, useSession } from "next-auth/client"

const Header = ({ categories }) => {
  const [session] = useSession()
  const [textSearch, setTextSearch] = useState("")
  const [storiesSearch, setStoriesSearch] = useState([])
  const router = useRouter()
  const typingTimeoutRef = useRef(null)

  useEffect(() => {
    const fetchStoriesSearch = async () => {
      try {
        const response = await storyApi.getAll({
          title_like: textSearch
        })
        setStoriesSearch(response)
      } catch (error) {
        console.log("Failed to fetch stories list: ", error)
      }
    }

    if (textSearch !== "") {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      typingTimeoutRef.current = setTimeout(() => {
        fetchStoriesSearch()
      }, 300)
    } else {
      setStoriesSearch([])
    }
    return () => clearTimeout(typingTimeoutRef.current)
  }, [textSearch])

  const handleClick = storyId => {
    router.push(`/${storyId}`)
    setStoriesSearch([])
    setTextSearch("")
  }

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow-0">
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
        <div className="flex-grow relative">
          <div className="flex items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500">
            <input
              type="text"
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-1-md focus:outline-none px-4"
              value={textSearch}
              onChange={e => setTextSearch(e.target.value)}
            />
            <SearchIcon className="h-12 p-4" />
          </div>
          {textSearch !== "" && (
            <ul className="absolute z-50 w-full mt-2 py-2 px-12 bg-amazon_blue rounded-md divide-y divide-light-blue-400">
              {storiesSearch.length > 0 ? (
                storiesSearch.slice(0, 6).map(story => (
                  <li
                    className="text-white py-2 cursor-pointer hover:bg-gray-600"
                    onClick={() => handleClick(story.id)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          src={story.image}
                          width={50}
                          height={50}
                          layout="responsive"
                          objectFit="contain"
                          alt={story.title}
                          quality={65}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={story.image}
                        />
                      </div>

                      <div className="ml-4">
                        <div className="text-md leading-5 font-medium ">
                          {story.title}
                        </div>
                        <div className="text-xs leading-5 line-clamp-1">
                          {story.description}
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-white">No story found</li>
              )}
            </ul>
          )}
        </div>
        <div className="text-white flex items-center text-xs space-x-6 px-4">
          <div onClick={session ? signOut : signIn} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
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
