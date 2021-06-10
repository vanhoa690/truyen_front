import Head from "next/head"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Page, usePage } from "../../contexts/Page"
import CategoryPage from "../../components/Admin/Category"
import StoryPage from "../../components/Admin/Story"
import ChapPage from "../../components/Admin/Chap"

const Layout = () => {
  const { page } = usePage();
  const renderSwitch = () => {
    console.log({ page })
    switch (page) {
      case Page.Category:
        return <CategoryPage />;
      case Page.Story:
        return <StoryPage />;
      case Page.Chap:
        return <ChapPage />;
      default:
        return "";
    }
  };
  return (
    <>
      <Head>
        <title>Truyennho.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen bg-gray-200 font-roboto">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
              {renderSwitch()}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
export default Layout
