import React, { useState } from "react"
import { Action } from "./useMutation"
export type IChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

export const useForm = <T>(initialState: T, handleAction: Action<T>) => {
  const [formState, setFormState] = useState<T>(initialState)
  const handleChange = (event: React.ChangeEvent<IChangeElement>): void => {
    const { tagName, name, value, type, checked } =
      event.target as HTMLInputElement

    let parsedValue = null
    if (tagName === "SELECT" && value === "") {
      parsedValue = null
    } else if (type === "checkbox") {
      parsedValue = checked
    } else {
      parsedValue = value
    }
    console.log({ name })
    // const parsedValue = tagName === "SELECT" && value === "" ? null : value
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormState({ ...formState, [name]: parsedValue, updatedAt: new Date() })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    handleAction(formState)
  }
  return { formState, setFormState, handleChange, handleSubmit }
}
