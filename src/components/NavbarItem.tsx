import React from "react";
import cn from "classnames";
import Link from "next/link";

export interface INavbarItem {
  navItem: {
    href: string;
    icon: React.ReactNode;
    isChosen: boolean;
  };
}

const NavbarItem: React.FC<INavbarItem> = ({ navItem }) => {
  // npm color - #cc3534
  const style = {
    item: cn(
      "w-[250px] flex items-center justify-center px-10",
      navItem.isChosen ? "bg-[#cc3534]" : "bg-white hover:bg-gray-100"
    ),
    text: cn("pl-2", navItem.isChosen ? "text-white" : "text-black"),
  };

  return (
    <Link className={style.item} href={navItem.href}>
      {navItem.icon}
      <span className={style.text}>Shift Sign Up</span>
    </Link>
  );
};

export default NavbarItem;
