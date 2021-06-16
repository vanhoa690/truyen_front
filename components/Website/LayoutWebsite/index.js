import { NextSeo } from "next-seo"
import Header from "./Header"

const LayoutWebsite = ({ children, SEO, categories, categoryId }) => {
  return (
    <>
      <NextSeo {...SEO} />
      <div className="bg-gray-100">
        <Header categories={categories} categoryId={categoryId} />

        <main className="max-w-screen-2xl mx-auto">{children}</main>
      </div>
    </>
  )
}
export default LayoutWebsite
