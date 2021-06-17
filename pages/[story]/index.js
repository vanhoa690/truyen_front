import Story from "../../components/Website/Story"
import useFetch from "../../hooks/useFetch"

const StoryPage = ({ categories, story, chaps }) => {
  return <Story story={story} chaps={chaps} categories={categories} />
}
export default StoryPage

export const getServerSideProps = async context => {
  const storyId = context.query.story

  const initialState = {
    storyId
  }
  const { categories, story, chaps } = await useFetch(initialState)
  return {
    props: {
      categories: categories || [],
      story: story || {},
      chaps: chaps || []
    }
  }
}
