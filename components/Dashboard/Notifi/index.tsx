// // import Form from "./FormFields"
// // import "./Dashboard.module.scss"
// // import styles from "./Dashboard.module.scss"
// // import moment from "moment"
// // import { useState } from "react"
// import Notification from "./Notification"

// const Dashboard = ({}) => {
//   return (
//     <>
//       <Notification />
//     </>
//     // <div className="wrapper">
//     //   <h1>Dashboard </h1>
//     // </div>
//   )
// }
// export default Dashboard

import React, { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import './App.css';

import Notification from "./Notification"
import { RootState } from "../../store"
import { setNotification } from "../../store/actions/notificationActions"

const Dashboard: FC = () => {
  const dispatch = useDispatch()
  const { message, type } = useSelector(
    (state: RootState) => state.notification
  )
  const [counter, setCounter] = useState(1)

  const btnClickHandler = (type: "success" | "danger" | "warning") => {
    dispatch(
      setNotification({ message: `Notification message ${counter}`, type })
    )
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div className="App">
      {message && <Notification message={message} type={type} />}
      <div className="container">
        <h1 className="is-size-1 mb-4">Test notifications</h1>
        <button
          className="button mr-2"
          onClick={() => btnClickHandler("success")}
        >
          Add success notification
        </button>
        <button
          className="button mr-2"
          onClick={() => btnClickHandler("danger")}
        >
          Add danger notification
        </button>
        <button
          className="button mr-2"
          onClick={() => btnClickHandler("warning")}
        >
          Add warning notification
        </button>
      </div>
    </div>
  )
}

export default Dashboard
