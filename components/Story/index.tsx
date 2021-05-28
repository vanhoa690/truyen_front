// import Image from "next/image";
// import {
//   BellIcon,
//   ChatIcon,
//   ChevronDownIcon,
//   HomeIcon,
//   UserGroupIcon,
//   ViewGridIcon,
// } from "@heroicons/react/solid";
// import {
//   FlagIcon,
//   PlayIcon,
//   SearchIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/outline";
import Card from "./Card";


const images = [
  {
    id: 1,
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  },
  {
    id: 2,
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  },
  {
    id: 4,
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
  , {
    id: 5,
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
  , {
    id: 6,
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
]


const Story = () => {
  const story = {
    name: 'asdasd',
    content: 'asdasdasdasd',
  };

  return (
    <div className="container mx-auto mt-16">
      <h3 className="text-gray-700 text-3xl font-semibold">Story</h3>
      <hr />
      <div className="mt-5">
        <h4 className="text-gray-700">{story.name}</h4>
        <div className="max-w-sm w-full lg:max-w-full lg:flex mt-6">
          {/* <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style="{backgroundImage: 'url('+story.avatar+')'}"
          title="Woman holding a mug"
        ></div> */}
          <div
            className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
          >
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  />
                </svg>
              Members only
            </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {story.name}
              </div>
              <p className="text-gray-700 text-base">
                {story.content}
              </p>
            </div>
            <div className="flex items-center">
              {/* <img
              className="w-10 h-10 rounded-full mr-4"
              :src="story.avatar"
              alt="Avatar of Jonathan Reinink"
            /> */}
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
          >
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                </th>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                </th>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                </th>
                  <th
                    className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>

              <tbody className="bg-white">
                <tr>
                  <td
                    className="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        76
                    </div>

                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          chapList.name
                      </div>
                        <div className="text-sm leading-5 text-gray-500">
                          chapList.slug
                      </div>
                      </div>
                    </div>
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div className="text-sm leading-5 text-gray-900">
                      chapList._id
                  </div>
                    <div className="text-sm leading-5 text-gray-500" >
                      story.name
                  </div>
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Full
                  </span>
                    <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-green-800">
                      Updating
                  </span>
                  </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    u.role
                </td>

                  <td
                    className="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" className="text-indigo-600 hover:text-indigo-900"
                    >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Story;
