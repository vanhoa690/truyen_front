import Chap from "../../../components/Website/Chap"
import useFetch from "../../../hooks/useFetch"

const ChapPage = ({
  categories,
  storiesPopularAll,
  story,
  chapsRelated,
  chap
}) => {
  return (
    <Chap
      story={story}
      chap={chap}
      categories={categories}
      storiesPopularAll={storiesPopularAll}
      chapsRelated={chapsRelated}
    />
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
  const { categories, storiesPopularAll, story, chapsRelated, chap } =
    await useFetch(initialState)

  return {
    props: {
      categories: categories || [],
      storiesPopularAll: storiesPopularAll || [],
      story: story || {},
      chapsRelated: chapsRelated || [],
      chap: chap || {}
    }
  }
}
