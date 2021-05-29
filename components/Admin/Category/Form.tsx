import { useState } from 'react'
import Input from "./Input"
import Checkbox from "./Checkbox"

const Form = () => {

  const dataInit = {
    name: "",
    slug: "",
    titleSEO: "",
    description: "",
    descSEO: "",
    image: "",
    visible: true,
    // address: "",
    // activeDate: "",
    // unitLevelLimit: undefined
  };
  const [input, setInput] = useState(
    Object.assign({}, dataInit)
  );
  // const [input, setInput] = useState(dataInit)
  const rows = [
    {
      title: 'Name',
      name: 'name',
      vaule: input.name
    },
    {
      title: 'Slug',
      name: 'slug',
      vaule: input.slug
    },
    {
      title: 'Title SEO',
      name: 'titleSEO',
      vaule: input.titleSEO
    },
    {
      title: 'Desc SEO',
      name: 'descSEO',
      vaule: input.descSEO
    },
    {
      title: 'Image',
      name: 'image',
      vaule: input.image
    },
  ]
  const checkbox = {
    title: 'Visible',
    name: 'visible',
    vaule: input.visible
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(input);
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    const { value, name } = event.target;
    console.log(event.target.name)
    setInput({ ...input, [name]: value });
  }

  const handleCheckbox = (event: any) => {
    const { checked, name } = event.target;
    console.log(event.target.name)
    setInput({ ...input, [name]: checked });
  }

  return (
    <form onSubmit={handleSubmit}>
      {rows && rows.map((row, index) => (
        <Input title={row.title} name={row.name} value={row.vaule} onChange={handleOnChange} key={index} />
      ))}
      <Checkbox title={checkbox.title} name={checkbox.name} value={checkbox.vaule} onChange={handleCheckbox} />
      <button
        className="px-6 py-3 bg-gray-600 rounded-md text-white font-medium tracking-wide hover:bg-gray-500 mt-6"
        type="submit"
      // onSubmit={handleSubmit}
      >
        Add
   </button>
    </form>
  );
}
export default Form
