import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

export interface INavbarItem {
  navItem: {
    href: string;
    text: string;
    icon: React.ReactNode;
    isChosen: boolean;
  };
}

const NavbarItem: React.FC<INavbarItem> = ({ navItem }) => {
  const style = {
    item: cn(
      'w-[250px] flex items-center justify-center px-10',
      navItem.isChosen ? 'bg-npm-red' : 'bg-white hover:bg-gray-100'
    ),
    text: cn('pl-2', navItem.isChosen ? 'text-white' : 'text-black'),
  };

  return (
    <Link className={style.item} href={navItem.href}>
      {navItem.icon}
      <span className={style.text}>{navItem.text}</span>
    </Link>
  );
};

export default NavbarItem;
