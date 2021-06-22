import MultiselectCheckbox from "./MultiselectCheckbox"
const Dashboard = () => {
  const options = [{ label: "Item One" }, { label: "Item Two" }]
  return (
    <MultiselectCheckbox
      options={options}
      onChange={data => {
        console.log(data)
      }}
    />
  )
}

export default Dashboard
