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
const Home = () => {
  return (
    <div className="container mx-auto mt-16 bg-gray-100 p-10">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 justify-items-center">
        {images.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
