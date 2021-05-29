// import Card from "./Card"
interface Props {
  title: string;
  name: string;
  value: boolean;
  onChange(): void
}

const Checkbox = ({ title, name, value, onChange }: Props) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
      <div>
        <label className="text-gray-700 mr-6">{title}</label>
        <input
          name={name}
          value={value}
          checked={value}
          onChange={onChange}
          type="checkbox"
          class="form-checkbox h-5 w-5 text-gray-600"
        />
      </div>
    </div>
  );
}
export default Checkbox
