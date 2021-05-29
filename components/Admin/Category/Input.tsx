// import Card from "./Card"
interface Props {
  title: string;
  name: string;
  value: string;
  onChange(): void
}

const Input = ({ title, name, value, onChange }: Props) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700">{title}</label>
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full mt-2 border border-gray-900"
          type="text"

        />
      </div>
    </div>
  );
}
export default Input
