import React from "react"
import styles from "./Form.module.scss"

const Textarea = props => {
  return (
    <div className={styles.form__group}>
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={props.error ? "error" : ""}
      ></textarea>
      {props.error && <div className={styles.form__error}>{props.error}</div>}
    </div>
  )
}

export default Textarea
