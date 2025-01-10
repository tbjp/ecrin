import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { TbPigMoney } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { TbCalendarCheck } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";

import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <TbLayoutDashboardFilled />,
        label: "Dashboard",
        href: "/",
      },
      {
        icon: <TbPigMoney />,
        label: "Financials",
        href: "/financials",
      },
      {
        icon: <BiBuildingHouse />,
        label: "Properties",
        href: "/properties",
      },
      {
        icon: <GoPeople />,
        label: "Staff",
        href: "/staff",
      },
      {
        icon: <TbCalendarCheck />,
        label: "Bookings",
        href: "/bookings",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile />,
        label: "Profile",
        href: "/profile",
      },
      {
        icon: <TbSettings />,
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <TbLogout />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight text-xl lg:text-sm"
              >
                {item.icon}
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
