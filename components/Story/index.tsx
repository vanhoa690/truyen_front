import Link from "next/link";
import { useRouter } from 'next/router'
import Card from "./Card";
import Chap from "./Chap";


const chaps = [
  {
    id: 1,
    name: "Chap 1",
    path: '/chap-01'
  },
  {
    id: 2,
    name: "Chap 2",
    path: '/chap-02'
  },
  {
    id: 3,
    name: "Chap 3",
    path: '/chap-03'
  },
  {
    id: 4,
    name: "Chap 4",
    path: '/chap-04'
  },
  {
    id: 5,
    name: "Chap 5",
    path: '/chap-05'
  },
  {
    id: 6,
    name: "Chap 6",
    path: '/chap-05'
  },
  {
    id: 7,
    name: "Chap 7",
    path: '/chap-05'
  },
  {
    id: 8,
    name: "Chap 8",
    path: '/chap-05'
  },



];

const story = {
  name: "ONE PIECE – ĐẢO HẢI TẶC",
  content: "One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất trên thế giới. Trong One Piece, mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính, lối dẫn truyện hấp dẫn chứa đầy các bước ngoặt bất ngờ và cũng vô cùng hài hước đã biến One Piece trở thành một trong những bộ truyện nổi tiếng nhất không thể bỏ qua. Hãy đọc One Piece để hòa mình vào một thế giới của những hải tặc rộng lớn, đầy màu sắc, sống động và thú vị, cùng đắm chìm với những nhân vật yêu tự do, trên hành trình đi tìm ước mơ của mình.",
  date: "2021-12-01",
  author: "Truyen nho",
  img: "https://ewr1.vultrobjects.com/truyennho-com/avatar/one-piece-dao-hai-tac.webp"
};

const Story = () => {
  const router = useRouter()
  const storySlug = router.query.story
  // console.log(story)
  return (
    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col mt-16 bg-gray-300 rounded p-10">
      <h2 className="text-center font-serif uppercase text-4xl xl:text-5xl">{story.name}</h2>
      <Card story={story} />
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 xs:grid-cols-3 gap-2 justify-items-center mt-6">

        {chaps.map((chap: any, index: number) => (
          <Link href={`${storySlug}${chap.path}`}>
            <a >
              <Chap chap={chap} key={chap.id} />
            </a>
          </Link>

        ))}
      </div>
    </div>
  );
}

export default Story;