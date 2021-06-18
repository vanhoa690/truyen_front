import Home from "../components/Website/Home"
import useFetch from "../hooks/useFetch"

const HomePage = ({
  categories,
  stories,
  storiesPopularAll,
  storiesPopular,
  categoryId,
  chapsPopular
}) => {
  return (
    <Home
      categories={categories}
      stories={stories}
      storiesPopularAll={storiesPopularAll}
      storiesPopular={storiesPopular}
      categoryId={categoryId}
      chapsPopular={chapsPopular}
    />
  )
}
export default HomePage

export const getServerSideProps = async ({ query: { categoryId = "All" } }) => {
  const initialState = {
    categoryId
  }
  const {
    categories,
    storiesPopularAll,
    storiesPopular,
    stories,
    chapsPopular
  } = await useFetch(initialState)

  return {
    props: {
      categoryId,
      categories: categories || [],
      storiesPopularAll: storiesPopularAll || [],
      storiesPopular: storiesPopular || [],
      stories: stories || [],
      chapsPopular: chapsPopular || []
    }
  }
}
