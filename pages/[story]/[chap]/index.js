import Chap from "../../../components/Website/Chap"

const ChapPage = ({ categories, story, chaps, chap }) => {
  return (
    <Chap story={story} chaps={chaps} chap={chap} categories={categories} />
  )
}
export default ChapPage

export const getServerSideProps = async context => {
  const baseUrl = `${process.env.url_api}`
  const storyUrl = "stories"
  const chapUrl = "chaps"
  const chapId = context.query.chap
  const storyId = context.query.story
  const categoryUrl = "categories"

  const categories = await fetch(`${baseUrl}/${categoryUrl}`).then(res =>
    res.json()
  )
  const chaps = await fetch(`${baseUrl}/${chapUrl}`).then(res => res.json())
  const chap = await fetch(`${baseUrl}/${chapUrl}/${chapId}`).then(res =>
    res.json()
  )
  const story = await fetch(`${baseUrl}/${storyUrl}/${storyId}`).then(res =>
    res.json()
  )
  // .then(res => res.data)
  return {
    props: {
      categories,
      story,
      chaps,
      chap
    }
  }
}
