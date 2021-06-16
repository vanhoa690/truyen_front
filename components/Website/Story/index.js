import StoryInfo from "./StoryInfo"
import ChapFeed from "./ChapFeed"
import LayoutWebsite from "Website/LayoutWebsite"

const domainName = "| Truyennho.com"

const Story = ({ categories, story, chaps }) => {
  const SEO = {
    title: `${story.titleSeo} ${domainName}`,
    description: story.descSeo,

    openGraph: {
      title: `${story.titleSeo} ${domainName}`,
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
