// import Layout from "../../components/Layout";
// import Story from "../../components/Story";
import Chap from "../../../components/Website/Chap"

const ChapPage = ({ chap }) => {
  return (
    // <h1>Story</h1>
    // <Layout>
    <Chap chap={chap} />
    // </Layout>
  )
}
export default ChapPage

export const getServerSideProps = async context => {
  const baseUrl = `${process.env.url_api}`
  const chapUrl = "chaps"
  const chapId = context.query.chap
  const chap = await fetch(`${baseUrl}/${chapUrl}/${chapId}?_page=1&_limit=4`)
    .then(res => res.json())
    .then(res => res.data)
  return {
    props: {
      chap
    }
  }
}
