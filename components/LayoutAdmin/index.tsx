import Head from "next/head"
import Header from "./Header"
import Sidebar from "./Sidebar"
// import Widgets from './Widgets'
// import Footer from './Footer'

interface Props {
  children: any
  title?: String
}

const Layout = ({ children, title = "Truyennho.com" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen bg-gray-200 font-roboto">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">{children}</div>
          </main>
        </div>
      </div>
    </>
  )
}
export default Layout
