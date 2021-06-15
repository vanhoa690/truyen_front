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
  // console.log(context)
  const chap = await fetch(
    `http://localhost:5000/api/chaps/${context.query.chap}`
  ).then(res => res.json())
  // const chaps = await fetch("http://localhost:5000/api/chaps").then(res =>
  //   res.json()
  // )
  return {
    props: {
      chap
      // story,
      // chaps
    }
  }
}
