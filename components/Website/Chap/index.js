import Head from "next/head"
import Header from "./Header"
import ChapInfo from "./ChapInfo"

const Chap = ({ chap }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <ChapInfo chap={chap} />
      </main>
    </div>
  )
}

export default Chap
