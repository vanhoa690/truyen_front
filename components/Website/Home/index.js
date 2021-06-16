import HomeFeed from "./HomeFeed"
import LayoutWebsite from "Website/LayoutWebsite"

const domainName = "| Truyennho.com"

const Story = ({ categories, stories, storiesPopular }) => {
  const SEO = {
    title: `${categories[0].titleSeo} ${domainName}`,
    description: categories[0].descSeo,

    openGraph: {
      title: `${categories[0].titleSeo} ${domainName}`,
      description: categories[0].descSeo
    }
  }
  return (
    <LayoutWebsite SEO={SEO} categories={categories}>
      <HomeFeed stories={stories} storiesPopular={storiesPopular} />
    </LayoutWebsite>
  )
}

export default Story
