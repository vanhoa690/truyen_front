import { useState } from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
// import {
//   FlagIcon,
//   PlayIcon,
//   SearchIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/outline";

import Image from "./Image";
import style from "./Chap.module.css";

const story = {
  name: 'asdasd',
  content: 'asdasdasdasd',
};
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
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-4.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  },
  {
    id: 4,
    webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-3.jpeg',
    user: 'abc',
    views: 123,
    downloads: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
  // , {
  //   id: 5,
  //   webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
  //   user: 'abc',
  //   views: 123,
  //   downloads: 12212,
  //   likes: 324324,
  //   tags: 'tag1, tag2',
  // }
  // , {
  //   id: 6,
  //   webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
  //   user: 'abc',
  //   views: 123,
  //   downloads: 12212,
  //   likes: 324324,
  //   tags: 'tag1, tag2',
  // }
]


const Chap = () => {
  const [current, setCurrent] = useState(0);


  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if (!Array.isArray(images) || images.length <= 0) return null

  return (
    <section className="container mx-auto mt-16">

      <div className={style.slider} >
        <ChevronDownIcon
          className={`h-50 text-gray-500 text-center sm:h-7 mx-autogroup-hover:text-blue-500 text-blue-500 ${style.left_arrow}`}
          onClick={prevSlide}
        />
        <ChevronDownIcon
          className={`h-50 text-gray-500 text-center sm:h-7 mx-autogroup-hover:text-blue-500 text-blue-500 ${style.right_arrow}`}
          onClick={nextSlide}
        />
        {images.map((image, index) => (
          // <Image key={image.id} image={image} />
          <div className={index === current ? 'slide active' : 'slide'}>
            {index === current && (<img src={image.webformatURL} alt="" key={image.id} className={style.image} />)}

          </div>
        ))}

      </div>
    </section>
  );
}

export default Chap;
