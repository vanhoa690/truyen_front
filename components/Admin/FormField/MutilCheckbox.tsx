import { MutilCheckboxProps } from "../../../interfaces/PagesProps"
import { Genre } from "../../../interfaces/RecordEntities";
// import { Input } from "./Input"
import React, { useState } from "react";

export const MutilCheckbox = ({ label, name, value, options,
  handleChange }: MutilCheckboxProps<Genre>) => {
  // const index = options.findIndex(c => c.id === chap.id)
  console.log({ value, options })

  const [isChecked, setIsChecked] = useState({});
  // const handleSingleCheck = e => {
  //   setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  //   console.log({ isChecked })
  //   handleChange(isChecked)
  // };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{label}</label>
        {options.map(genre => (
          <>

            <input
              type='checkbox'
              name={name}
              className="form-checkbox h-5 w-5 text-gray-600 ml-5"
              // checked={value.includes[genre.id] ? false : true}
              onChange={handleChange}
            />
            <label className="text-gray-700 ml-2">{genre.title}</label>
          </>
        ))}
      </div>
    </div>
  )
}
