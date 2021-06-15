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
  const storiesPopular = await fetch(
    "http://localhost:5000/api/stories?popular=true"
  ).then(res => res.json())
  const stories = await fetch(
    "http://localhost:5000/api/stories?_page=1&_limit=4"
  )
    .then(res => res.json())
    .then(res => res.data)
  const categories = await fetch("http://localhost:5000/api/categories").then(
    res => res.json()
  )
  return {
    props: {
      categories,
      storiesPopular,
      stories
    }
  }
}
