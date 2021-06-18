import Story from "../../components/Website/Story"
import useFetch from "../../hooks/useFetch"

const StoryPage = ({ categories, storiesPopularAll, story, chaps }) => {
  return (
    <Story
      story={story}
      chaps={chaps}
      categories={categories}
      storiesPopularAll={storiesPopularAll}
    />
  )
}
export default StoryPage

export const getServerSideProps = async context => {
  const storyId = context.query.story

  const initialState = {
    storyId
  }
  const { categories, storiesPopularAll, story, chaps } = await useFetch(
    initialState
  )
  return {
    props: {
      categories: categories || [],
      storiesPopularAll: storiesPopularAll || [],
      story: story || {},
      chaps: chaps || []
    }
  }
}
