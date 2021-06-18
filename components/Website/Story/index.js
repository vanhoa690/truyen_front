import StoryInfo from "./StoryInfo"
import ChapFeed from "./ChapFeed"
import LayoutWebsite from "Website/LayoutWebsite"

const Story = ({ categories, storiesPopularAll, story, chaps, genres }) => {
  let SEO = null
  if (story.titleSeo && story.descSeo) {
    SEO = {
      title: story.titleSeo,
      description: story.descSeo
    }
  }

  return (
    <LayoutWebsite
      SEO={SEO}
      categories={categories}
      storiesPopularAll={storiesPopularAll}
    >
      <StoryInfo story={story} />
      <ChapFeed story={story} chaps={chaps} genres={genres} />
    </LayoutWebsite>
  )
}

export default Story
