import Image from "next/image";

interface Props {
  category: any;
  // src?: any;
  // category: String;
  // Icon: any;
  handleClick(id: any): void;
}

const Sidebar = ({ category, handleClick }: Props) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer " onClick={handleClick(category.id)}>
      {category.src && (
        <Image
          className="rounded-full"
          src={category.src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {category.icon && <category.icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{category.name}</p>
    </div>
  );
};

export default Sidebar;
