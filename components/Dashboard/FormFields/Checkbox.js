import React from "react"
import styles from "./Form.module.scss"

const Checkbox = props => {
  return (
    <div className={styles.form__group && styles.form__group_checkbox}>
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          checked={props.checked}
        />
        <span>{props.label}</span>
      </label>
      {props.error && <div className={styles.form__error}>{props.error}</div>}
    </div>
  )
}

export default Checkbox
