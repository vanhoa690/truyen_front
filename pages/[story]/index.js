import Story from "../../components/Website/Story"

const StoryPage = ({ categories, story, chaps }) => {
  return <Story story={story} chaps={chaps} categories={categories} />
}
export default StoryPage

export const getServerSideProps = async context => {
  const baseUrl = `${process.env.url_api}`
  const storyUrl = "stories"
  const chapUrl = "chaps"
  const storyId = context.query.story
  const categoryUrl = "categories"

  const categories = await fetch(`${baseUrl}/${categoryUrl}`).then(res =>
    res.json()
  )
  const story = await fetch(`${baseUrl}/${storyUrl}/${storyId}`).then(res =>
    res.json()
  )
  const chaps = await fetch(`${baseUrl}/${chapUrl}?story=${story.id}`).then(
    res => res.json()
  )
  return {
    props: {
      categories,
      story,
      chaps
    }
  }
}
