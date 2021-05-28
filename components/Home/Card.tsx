import React from 'react';

// interface CardProps {
//   image: Object;
// }

// interface ImgageProps {
//   tags: Array<T>;
// }

// interface tagProps {
//   tag: any;
// }




// const tags = ['tag1', 'tag2'];
// const tags = 'tag1, tag2';
// const image = {
//   webformatURL: 'https://sunhouse.com.vn/pic/news/images/image-20210514134956-5.jpeg',
//   user: 'abc',
//   views: 123,
//   downloads: 12212,
//   likes: 324324,
//   tags: 'tag1, tag2',
// }

interface Props {
  image: any;
}

const Card = ({ image }: Props) => {
  // const Card = () => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag: any, index: number) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card;
