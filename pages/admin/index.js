import LayoutAdmin from "../../components/Admin/LayoutAdmin"

const AdminPage = () => {
  return <LayoutAdmin />
}
export default AdminPage

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
