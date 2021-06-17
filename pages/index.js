import Home from "../components/Website/Home"
import useFetch from "../hooks/useFetch"

const HomePage = ({ categories, stories, storiesPopular, categoryId }) => {
  return (
    <Home
      categories={categories}
      stories={stories}
      storiesPopular={storiesPopular}
      categoryId={categoryId}
    />
  )
}
export default HomePage

export const getServerSideProps = async ({ query: { categoryId = "All" } }) => {
  const initialState = {
    categoryId
  }
  const { categories, storiesPopular, stories } = await useFetch(initialState)

  return {
    props: {
      categoryId,
      categories: categories || [],
      storiesPopular: storiesPopular || [],
      stories: stories || []
    }
  }
}
