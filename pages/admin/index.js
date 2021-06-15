// import { PageStore } from "../../contexts/Page"
// import LayoutAdmin from "../../components/Admin/Layout"
import Dashboard from "../../components/Dashboard/table"
import "bulma/css/bulma.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

const DashboardPage = ({ chaps }) => {
  return (
    <Dashboard data={chaps} />
    // <PageStore>
    // <LayoutAdmin />
    // </PageStore>
  )
}
export default DashboardPage

export const getServerSideProps = async context => {
  const baseUrl = `${process.env.url_api}`
  const chapUrl = "chaps"

  const chaps = await fetch(`${baseUrl}/${chapUrl}`).then(res => res.json())
  return {
    props: {
      chaps
    }
  }
}
