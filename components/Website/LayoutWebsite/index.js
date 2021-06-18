import { NextSeo } from "next-seo"
import Header from "./Header"
import Footer from "./Footer"

const domainName = "| Truyennho.com"

const LayoutWebsite = ({ children, SEO, categories, storiesPopularAll }) => {
  let SEOInfo = {
    title: `${domainName}`,
    description: `${domainName}`,

    openGraph: {
      title: `${domainName}`,
      description: `${domainName}`
    }
  }
  if (SEO) {
    SEOInfo = {
      title: `${SEO.title} ${domainName}`,
      description: SEO.description,

      openGraph: {
        title: `${SEO.title} ${domainName}`,
        description: SEO.description
      }
    }
  }
  return (
    <>
      <NextSeo {...SEOInfo} />
      <div className="bg-gray-100">
        <Header categories={categories} />

        <main className="max-w-screen-2xl mx-auto">{children}</main>
        <Footer categories={categories} storiesPopularAll={storiesPopularAll} />
      </div>
    </>
  )
}
export default LayoutWebsite
