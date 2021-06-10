import { useState } from "react"
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from "@heroicons/react/outline"
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon
} from "@heroicons/react/solid"

const categories = [
  {
    id: 0,
    icon: CalendarIcon,
    name: "Admin",
    slug: "admin"
  },
  {
    id: 1,
    icon: UsersIcon,
    name: "Truyen Tranh",
    slug: "truyen-tranh"
  },
  {
    id: 2,
    icon: UserGroupIcon,
    name: " Kiem Hiep"
  },
  {
    id: 3,
    icon: ShoppingBagIcon,
    name: " Tien Hiep"
  },
  {
    id: 4,
    icon: DesktopComputerIcon,
    name: " Ngon Tinh"
  },
  {
    id: 5,
    icon: ClockIcon,
    name: " Dam My"
  }
]
import SidebarRow from "./SidebarRow"

const Sidebar = () => {
  const [id, setId] = useState("")

  // const handleClick = (id: any) => {
  //   setId(id)
  //   console.log(id)
  // }

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {categories &&
        categories.map((category: any, index: number) => (
          <SidebarRow
            category={category}
            // handleClick={handleClick(category.id)}
          />
        ))}
      {/* <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" /> */}
    </div>
  )
}

export default Sidebar
