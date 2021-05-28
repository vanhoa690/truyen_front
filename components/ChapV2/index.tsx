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


  if (!Array.isArray(images) || images.length <= 0) return null

  return (
    <section className="container mx-auto mt-16">

      <div className={style.slider} >

        {images.map((image, index) => (
          // <Image key={image.id} image={image} />
          <img src={image.webformatURL} alt="" key={image.id} className={style.image} />


        ))}

      </div>
    </section>
  );
}

export default Chap;
