import Home from "../components/Website/Home"
// import Layout from "../components/Layout";

const HomePage = ({ categories, stories }) => {
  return (
    // <Layout>

    <Home categories={categories} stories={stories} />

    // </Layout>
  )
}
export default HomePage

export const getServerSideProps = async () => {
  const stories = await fetch("http://localhost:5000/api/stories").then(res =>
    res.json()
  )
  const categories = await fetch("http://localhost:5000/api/categories").then(
    res => res.json()
  )
  return {
    props: {
      categories,
      stories
    }
  }
}
