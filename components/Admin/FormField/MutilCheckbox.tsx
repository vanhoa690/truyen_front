import { MutilCheckboxProps } from "../../../interfaces/PagesProps"
import { Genre } from "../../../interfaces/RecordEntities";
import { Input } from "./Input"
import React, { useState } from "react";

export const MutilCheckbox = ({ label, name, checked, options,
  // OptionItem,
  handleChange }: MutilCheckboxProps<Genre>) => {
  // console.log({ value })

  const [isChecked, setIsChecked] = useState({});
  const handleSingleCheck = e => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
    console.log({ isChecked })
    handleChange(isChecked)
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{label}</label>
        {options.map(genre => (
          <Input
            label={genre.title}
            name={genre.title}
            type="checkbox"
            checked={isChecked[genre.id]}
            onChange={handleSingleCheck}
          />
          // <span>
          //   <input
          //     type='checkbox'
          //     name={genre.title}
          //     className="form-checkbox h-5 w-5 text-gray-600 ml-5"
          //     checked={checked[genre.title]}
          //     // checked={isChecked[genre.title]}
          //     onChange={handleChange}
          //   />
          //   <label className="text-gray-700">{genre.title}</label>
          // </span>
        ))}




        {/* <div>
        <label className="text-gray-700">Parent</label>
        <select name={name} value={value} onChange={handleChange}>
          <option value="">Select</option>
          {options.map(option => (
            // <OptionItem record={option} />
            // <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select> */}
      </div>
    </div>
  )
}
