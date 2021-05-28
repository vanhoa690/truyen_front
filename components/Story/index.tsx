
import Card from "./Card";
import Chap from "./Chap";


const chaps = [
  {
    title: "Dr. Perry Williams Joins UNR as Assistant Professor",
    excerpt: "Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!",
    date: "2021-12-01",
    author: "Perry Williams",
    img: "https://source.unsplash.com/l3Jdvs1Qui4/800x600"
  }, {
    title: "Good News for a Change: Secretarial Order 3362",
    excerpt: "in Feburary 2019, the U.S. Secretary of the Interior signed Secretarial Order 3362, a framework designed to improve habitat quality and protect crucial migration corridors for several species of wildlife including pronghorn, elk, and mule deer.",
    date: "2021-12-01",
    author: "Cody Schroeder",
    img: "https://source.unsplash.com/dG_p9P6aroQ/800x600"
  }, {
    title: "Pygmy Rabbits, an Understudied Icon of the West",
    excerpt: "Pygmy rabbits are the world’s smallest, and undoubtedly the cutest, leporid, and one of only two North American rabbits to dig their own burrows.",
    date: "2021-12-01",
    author: "Miranda Crowell",
    img: "https://source.unsplash.com/mstHiGp2U6A/800x600"
  }, {
    title: "A Wonderful Life: Career Retrospective",
    excerpt: "I can’t imagine a better way to have spent my professional life than as a professor of Wildlife Ecology. Kurt Pregitzer, our Chair for several years before 2010 used to say that being a professor was the best job in the world; he was right.",
    date: "2021-12-01",
    author: "Jim Sedinger",
    img: "https://source.unsplash.com/3NI9aJGOl-4/800x600"
  }
];

const card = {
  title: "Dr. Perry Williams Joins UNR as Assistant Professor",
  excerpt: "Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!",
  date: "2021-12-01",
  author: "Perry Williams",
  img: "https://source.unsplash.com/l3Jdvs1Qui4/800x600"
};

const Story = () => {
  const story = {
    name: 'One Piece',
    content: 'Dr. Perry Williams recently joined the faculty in the Department of Natural Resources and Environmental Science at the University of Nevada, Reno, and was kind enough to provide his biography to help us get to know him. Welcome to Nevada, Dr. Williams!',
  };

  return (
    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col mt-16 bg-gray-300 rounded p-10">
      <h2 className="text-center font-serif uppercase text-4xl xl:text-5xl">{story.name}</h2>
      <Card card={card} />
      <div className="grid grid-cols-3 gap-4 mt-16 bg-gray-300 h-screen ">
        {chaps.map((chap: any, index: number) => (
          <Chap key={index} chap={chap} />
        ))}
      </div>
    </div>
  );
}

export default Story;
