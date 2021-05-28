import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from './Header'
// import Sidebar from './Sidebar'
// import Widgets from './Widgets'
import Footer from './Footer'

interface Props {
  children: any;
  title?: String;
}

const Layout = ({ children, title = "Truyennho.com" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        {children}
      </main>
      <Footer />
    </>
  );
}
export default Layout