import Head from "next/head"
import Header from "./Header"
import Banner from "./Banner"
import ProductFeed from "./ProductFeed"

const Home = ({ categories, stories }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header categories={categories} />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed stories={stories} />
      </main>
    </div>
  )
}

export default Home
