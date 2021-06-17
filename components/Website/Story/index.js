import StoryInfo from "./StoryInfo"
import ChapFeed from "./ChapFeed"
import LayoutWebsite from "Website/LayoutWebsite"

const Story = ({ categories, story, chaps }) => {
  let SEO = null
  if (story.titleSeo && story.descSeo) {
    SEO = {
      title: story.titleSeo,
      description: story.descSeo
    }
  }

  return (
    <LayoutWebsite SEO={SEO} categories={categories}>
      <StoryInfo story={story} />
      <ChapFeed story={story} chaps={chaps} />
    </LayoutWebsite>
  )
}

export default Story
