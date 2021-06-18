import ChapContent from "./ChapContent"
import LayoutWebsite from "Website/LayoutWebsite"

const Chap = ({ categories, storiesPopularAll, story, chapsRelated, chap }) => {
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
    <LayoutWebsite
      SEO={SEO}
      categories={categories}
      storiesPopularAll={storiesPopularAll}
    >
      <ChapContent story={story} chap={chap} chapsRelated={chapsRelated} />
    </LayoutWebsite>
  )
}

export default Chap
