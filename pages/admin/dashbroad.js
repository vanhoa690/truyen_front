import Dashboard from "../../components/Dashboard"
import "bulma/css/bulma.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

// const DashboardPage = ({ chaps }) => {
// return <Dashboard data={chaps} />
const DashboardPage = () => {
  return <Dashboard />
}
export default DashboardPage

// export const getServerSideProps = async () => {
//   const baseUrl = `${process.env.url_api}`
//   const chapUrl = "chaps"

//   const chaps = await fetch(`${baseUrl}/${chapUrl}`).then(res => res.json())
//   return {
//     props: {
//       chaps
//     }
//   }
// }
