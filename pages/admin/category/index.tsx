// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Header from '../components/Layout/Header'
// import Sidebar from '../components/Layout/Sidebar'
// import Widgets from '../components/Layout/Widgets'
// import Footer from '../components/Footer'
import LayoutAdmin from "../../../components/LayoutAdmin"
import Category from "../../../components/Admin/Category"

const CategoryPage = () => {
  return (
    <LayoutAdmin>
      <Category />
    </LayoutAdmin>
  )
}
export default CategoryPage
