import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdCalendarMonth } from "react-icons/md";

const Navbar: React.FC = () => {
  const navClasses = "flex items-center px-20 py-10 bg-cyan-500";

  return (
    <nav className={navClasses}>
      <Link href="/">
        <Image
          src="/next.svg"
          alt="NPM enjoyers logo"
          width={180}
          height={37}
        />
      </Link>
      <Link href="/test">
        <MdCalendarMonth />
      </Link>
    </nav>
  );
};

export default Navbar;
