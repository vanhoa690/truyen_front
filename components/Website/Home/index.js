import HomeFeed from "./HomeFeed"
import LayoutWebsite from "Website/LayoutWebsite"

const domainName = "| Truyennho.com"

const Story = ({ categories, stories, storiesPopular, categoryId }) => {
  const index = categories.findIndex(c => c.id === categoryId)
  let SEO = null
  let category = null

  const infoSeo = (categories, index) => {
    if (categories.length > 0) {
      const SEO = {
        title: `${categories[index].titleSeo} ${domainName}`,
        description: categories[index].descSeo,

        openGraph: {
          title: `${categories[index].titleSeo} ${domainName}`,
          description: categories[index].descSeo
        }
      }
      return SEO
    }
    return {}
  }
  if (index >= 0) {
    category = categories[index]
    SEO = infoSeo(categories, index)
  } else {
    category = categories[0]
    SEO = infoSeo(categories, 0)
  }

  return (
    <LayoutWebsite SEO={SEO} categories={categories}>
      <HomeFeed
        stories={stories}
        storiesPopular={storiesPopular}
        category={category}
      />
    </LayoutWebsite>
  )
}

export default Story
