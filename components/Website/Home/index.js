import Head from "next/head"
import Header from "./Header"
// import Banner from "./Banner"
import HomeFeed from "./HomeFeed"

const Home = ({ categories, stories, storiesPopular }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header categories={categories} />

      <main className="max-w-screen-2xl mx-auto">
        {/* <Banner /> */}

        <HomeFeed stories={stories} storiesPopular={storiesPopular} />
      </main>
    </div>
  )
}

export default Home
