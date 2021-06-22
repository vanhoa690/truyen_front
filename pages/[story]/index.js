import Story from "../../components/Website/Story"
import useFetch from "../../hooks/useFetch"

const StoryPage = ({ categories, storiesPopularAll, story, chaps, genres }) => {
  return (
    <Story
      story={story}
      chaps={chaps}
      categories={categories}
      storiesPopularAll={storiesPopularAll}
      genres={genres}
    />
  )
}
export default StoryPage

export const getServerSideProps = async context => {
  const storyId = context.query.story
  const genreId = context.query.genreId

  const initialState = {
    storyId,
    genreId
  }
  const { categories, storiesPopularAll, story, chaps, genres } =
    await useFetch(initialState)
  return {
    props: {
      categories: categories || [],
      storiesPopularAll: storiesPopularAll || [],
      genres: genres || [],
      story: story || {},
      chaps: chaps || []
    }
  }
}
