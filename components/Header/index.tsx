import Image from "next/image";
// import {
//   BellIcon,
//   ChatIcon,
//   ChevronDownIcon,
//   HomeIcon,
//   UserGroupIcon,
//   ViewGridIcon,
// } from "@heroicons/react/solid";
// import {
//   FlagIcon,
//   PlayIcon,
//   SearchIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default Header;
