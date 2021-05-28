// import Head from "next/head"
// import Header from "./Header"
// import Sidebar from "./Sidebar"
// import Widgets from './Widgets'
// import Footer from './Footer'

// interface Props {
//   children: any
//   title?: String
// }
import Card from "./Card"

const cards = [
  {
    name: "Truyen Tranh",
    number: 123
  },
  {
    name: "Truyen Tranh",
    number: 123
  },

  {
    name: "Truyen Tranh",
    number: 123
  },
  {
    name: "Truyen Tranh",
    number: 123
  },
  {
    name: "Truyen Tranh",
    number: 123
  }
]
const Dashboard = () => {
  return (
    <>
      <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
      <div className="mt-4 flex flex-wrap ">
        {cards.map((card: any, index: number) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </>
  )
}
export default Dashboard
