import Link from "next/link";
import Card from "./Card";


const stories = [
  {
    id: 1,
    path: '/one-piece',
    webformatURL: 'https://ewr1.vultrobjects.com/truyennho-com/avatar/one-piece-dao-hai-tac.webp',
    name: 'One Piece',
    views: 123,
    numberChap: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  },
  {
    id: 2,
    path: '/one-piece',
    webformatURL: 'https://ewr1.vultrobjects.com/truyennho-com/avatar/attack-on-titan.webp',
    name: 'Tham tu Conan',
    views: 123,
    numberChap: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  },
  {
    id: 4,
    path: '/one-piece',
    webformatURL: 'https://ewr1.vultrobjects.com/truyennho-com/avatar/dragon-ball-super.webp',
    name: 'Dragon Ball',
    views: 123,
    numberChap: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
  , {
    id: 5,
    path: '/one-piece',
    webformatURL: 'https://ewr1.vultrobjects.com/truyennho-com/avatar/conan.webp',
    name: 'Attack on Titan',
    views: 123,
    numberChap: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
  , {
    id: 6,
    path: '/one-piece',
    webformatURL: 'https://ewr1.vultrobjects.com/truyennho-com/avatar/tinh-vo-than-quyet.webp',
    name: 'Tinh Than Vo Quyet',
    views: 123,
    numberChap: 12212,
    likes: 324324,
    tags: 'tag1, tag2',
  }
]
const Home = () => {
  return (
    <div className="container mx-auto mt-6 bg-gray-200 p-10">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 justify-items-center">
        {stories.map((story) => (
          <Link href={story.path}>
            <a>

              <Card key={story.id} story={story} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
