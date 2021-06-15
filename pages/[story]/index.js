// import Layout from "../../components/Layout";
// import Story from "../../components/Story";
import Story from "../../components/Website/Story"

const StoryPage = ({ story, chaps }) => {
  return (
    // <h1>Story</h1>
    // <Layout>
    <Story story={story} chaps={chaps} />
    // </Layout>
  )
}
export default StoryPage

// export const getStaticProps = async context => {
//   console.log({ context })
//   const res = await fetch(`${server}/api/articles/${context.params.id}`)

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

export const getServerSideProps = async context => {
  console.log(context.query.story)
  const story = await fetch(
    `http://localhost:5000/api/stories/${context.query.story}`
  ).then(res => res.json())
  const chaps = await fetch("http://localhost:5000/api/chaps").then(res =>
    res.json()
  )
  return {
    props: {
      story,
      chaps
    }
  }
}
