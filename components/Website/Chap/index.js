import ChapContent from "./ChapContent"
import LayoutWebsite from "Website/LayoutWebsite"

const domainName = "| Truyennho.com"
const Chap = ({ categories, story, chaps, chap }) => {
  const SEO = {
    title: `${story.title} - ${chap.title} ${domainName}`,
    description: `${story.title} - ${
      chap.title
    } ${domainName} ${chap.description.slice(0, 120)}`,

    openGraph: {
      title: `${story.title} - ${chap.title} ${domainName}`,
      description: `${story.title} - ${
        chap.title
      } ${domainName} ${chap.description.slice(0, 120)}`
    }
  }
  return (
    <LayoutWebsite SEO={SEO} categories={categories}>
      <ChapContent story={story} chaps={chaps} chap={chap} />
    </LayoutWebsite>
  )
}

export default Chap
