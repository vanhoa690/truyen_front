import Home from "../components/Website/Home"
// import Layout from "../components/Layout";

const HomePage = ({ categories, stories, storiesPopular }) => {
  return (
    // <Layout>

    <Home
      categories={categories}
      stories={stories}
      storiesPopular={storiesPopular}
    />

    // </Layout>
  )
}
export default HomePage

export const getServerSideProps = async () => {
  const baseUrl = `${process.env.url_api}`
  const storyUrl = "stories"
  const categoryUrl = "categories"
  const storiesPopular = await fetch(
    `${baseUrl}/${storyUrl}?popular=true`
  ).then(res => res.json())
  const stories = await fetch(`${baseUrl}/${storyUrl}?_page=1&_limit=4`)
    .then(res => res.json())
    .then(res => res.data)
  const categories = await fetch(`${baseUrl}/${categoryUrl}`).then(res =>
    res.json()
  )
  return {
    props: {
      categories,
      storiesPopular,
      stories
    }
  }
}
