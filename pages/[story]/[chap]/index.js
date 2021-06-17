import Chap from "../../../components/Website/Chap"
import useFetch from "../../../hooks/useFetch"

const ChapPage = ({ categories, story, chaps, chap }) => {
  return (
    <Chap story={story} chaps={chaps} chap={chap} categories={categories} />
  )
}
export default ChapPage

export const getServerSideProps = async context => {
  const storyId = context.query.story
  const chapId = context.query.chap

  const initialState = {
    storyId,
    chapId
  }
  const { categories, story, chaps, chap } = await useFetch(initialState)

  return {
    props: {
      categories: categories || [],
      story: story || {},
      chaps: chaps || [],
      chap: chap || {}
    }
  }
}
