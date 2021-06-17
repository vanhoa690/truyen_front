import ChapContent from "./ChapContent"
import LayoutWebsite from "Website/LayoutWebsite"

const Chap = ({ categories, story, chaps, chap }) => {
  let SEO = null
  if (story.title && chap.title && chap.description) {
    SEO = {
      title: `${story.title} - ${chap.title}`,
      description: `${story.title} - ${chap.title} ${chap.description.slice(
        0,
        120
      )}`
    }
  }

  return (
    <LayoutWebsite SEO={SEO} categories={categories}>
      <ChapContent story={story} chaps={chaps} chap={chap} />
    </LayoutWebsite>
  )
}

export default Chap
