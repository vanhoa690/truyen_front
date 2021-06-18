import Image from "next/image"

import { useRouter } from "next/router"

const Footer = ({ categories, storiesPopularAll }) => {
  const router = useRouter()

  return (
    <footer className=" bg-amazon_blue py-8 sm:py-12">
      <div className="container mx-auto px-4 text-white">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/3 xl:w-1/6">
            <h5
              className="text-xl font-bold mb-6 link"
              onClick={() => router.push("/")}
            >
              All
            </h5>
            <ul className="list-none">
              {storiesPopularAll.map(story => (
                <li
                  key={story.id}
                  className="mb-2"
                  onClick={() => router.push(`/${story.id}`)}
                >
                  <a className="pb-2 border-b border-solid border-transparent link">
                    {story.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {categories.map(category => (
            <div className="px-4 sm:w-1/2 md:w-1/3 xl:w-1/6" key={category.id}>
              <h5
                className="text-xl font-bold mb-6 link"
                onClick={() => router.push(`/?categoryId=${category.id}`)}
              >
                {category.title}
              </h5>
              <ul className="list-none">
                {storiesPopularAll.map(
                  story =>
                    story.category === category.id && (
                      <li
                        key={story.id}
                        className="mb-2"
                        onClick={() => router.push(`/${story.id}`)}
                      >
                        <a className="pb-2 border-b border-solid border-transparent link">
                          {story.title}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 text-center">Stay connected</h5>
          <div className="flex justify-center">
            <a className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
