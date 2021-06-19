// import Head from "next/head"
// import Header from "./Header"
// import Sidebar from "./Sidebar"
// import Widgets from './Widgets'
// import Footer from './Footer'

interface Props {
  card: any
  // name: String
  // number: Number
}

const Card = ({ card }: Props) => {
  return (
    <div className="w-full px-6 sm:w-1/2 xl:w-1/3 mb-3">
      <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
        <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75"></div>

        <div className="mx-5">
          <h4 className="text-2xl font-semibold text-gray-700">
            {card.number} Story
          </h4>
          <div className="text-gray-500">{card.name}</div>
        </div>
      </div>
    </div>
  )
}
export default Card
