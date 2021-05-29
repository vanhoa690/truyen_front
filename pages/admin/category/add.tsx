// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Header from '../components/Layout/Header'
// import Sidebar from '../components/Layout/Sidebar'
// import Widgets from '../components/Layout/Widgets'
// import Footer from '../components/Footer'
import LayoutAdmin from "../../../components/LayoutAdmin"
import CategoryAdd from "../../../components/Admin/Category/Add"

const CategoryAddPage = () => {
  return (
    <LayoutAdmin>
      <CategoryAdd />
    </LayoutAdmin>
  )
}
export default CategoryAddPage
