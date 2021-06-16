import React from "react"
import styles from "./Form.module.scss"
const Button = props => {
  return (
    <button type={props.type} className={styles.btn}>
      {props.title}
    </button>
  )
}

export default Button
