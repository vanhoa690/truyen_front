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

export const getServerSideProps = async context => {
  const baseUrl = `${process.env.url_api}`
  const storyUrl = "stories"
  const chapUrl = "chaps"
  const storyId = context.query.story
  const story = await fetch(`${baseUrl}/${storyUrl}/${storyId}`).then(res =>
    res.json()
  )
  const chaps = await fetch(`${baseUrl}/${chapUrl}`).then(res => res.json())
  return {
    props: {
      story,
      chaps
    }
  }
}
