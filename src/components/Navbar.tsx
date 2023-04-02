import React from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "./Button";
import NavbarItem from "./NavbarItem";
import { MdMenu } from "react-icons/md";
import {
  BsFillDoorOpenFill,
  BsFillCalendarWeekFill,
  BsArrowLeftRight,
} from "react-icons/bs";

export interface INavbar {
  page?: "sign-up" | "cover-requests" | "my-shifts";
}

const Navbar: React.FC<INavbar> = ({ page }) => {
  // npm color - #cc3534
  const style = {
    nav: "w-screen h-[80px] flex items-center w-fill px-10 bg-white shadow-md",
    button: "mr-10 hover:bg-gray-100 hover:rounded-full",
    logo: "w-[200px] pl-5 pr-10 hover:bg-gray-100",
    links: "h-[80px] flex",
    link: "w-[250px] flex items-center justify-center px-10",
    text: "pl-2",
  };

  const navItems = [
    {
      href: "/sign-up",
      icon: (
        <BsFillDoorOpenFill
          color={page === "sign-up" ? "white" : "black"}
          size={25}
        />
      ),
      isChosen: page === "sign-up",
    },
    {
      href: "/cover-requests",
      icon: (
        <BsArrowLeftRight
          color={page === "cover-requests" ? "white" : "black"}
          size={25}
        />
      ),
      isChosen: page === "cover-requests",
    },
    {
      href: "/my-shifts",
      icon: (
        <BsFillCalendarWeekFill
          color={page === "my-shifts" ? "white" : "black"}
          size={25}
        />
      ),
      isChosen: page === "my-shifts",
    },
  ];

  console.log(navItems);

  return (
    <nav className={style.nav}>
      <Button className={style.button}>
        <MdMenu size={40} />
      </Button>

      <Link href="/" className={style.logo}>
        <Image src="/npm.svg" alt="NPM enjoyers logo" width={80} height={37} />
      </Link>

      <div className={style.links}>
        {navItems.map((navItem) => {
          return <NavbarItem navItem={navItem} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
