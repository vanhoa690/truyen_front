import Head from "next/head"
import Header from "./Header"
import StoryInfo from "./StoryInfo"
import ChapFeed from "./ChapFeed"

const Story = ({ story, chaps }) => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <StoryInfo story={story} />

        <ChapFeed story={story} chaps={chaps} />
      </main>
    </div>
  )
}

export default Story
