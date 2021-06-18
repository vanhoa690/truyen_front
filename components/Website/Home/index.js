import HomeFeed from "./HomeFeed"
import LayoutWebsite from "Website/LayoutWebsite"

const Story = ({
  categories,
  stories,
  storiesPopularAll,
  storiesPopular,
  categoryId,
  chapsPopular
}) => {
  const index = categories.findIndex(c => c.id === categoryId)
  let SEO = null
  let category = null

  if (categories.length > 0) {
    if (index >= 0) {
      category = categories[index]
      SEO = {
        title: categories[index].titleSeo,
        description: categories[index].descSeo
      }
    } else {
      category = categories[0]
      SEO = {
        title: categories[0].titleSeo,
        description: categories[0].descSeo
      }
    }
  }

  return (
    <LayoutWebsite
      SEO={SEO}
      categories={categories}
      storiesPopularAll={storiesPopularAll}
    >
      <HomeFeed
        stories={stories}
        storiesPopular={storiesPopular}
        category={category}
        chapsPopular={chapsPopular}
      />
    </LayoutWebsite>
  )
}

export default Story
