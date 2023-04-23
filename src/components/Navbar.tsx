import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NPM from '../../public/NPM';

import { BsFillDoorOpenFill, BsFillCalendarWeekFill, BsArrowLeftRight } from 'react-icons/bs';
import { MdKeyboardBackspace } from 'react-icons/md';

import Button from './Button';
import ButtonWithSideBar from './Button/ButtonWithSideBar';
import NavbarItem from './NavbarItem';

export interface INavbar {
  page?: 'sign-up' | 'cover-requests' | 'my-shifts' | '';
  isback?: boolean;
}

const Navbar: React.FC<INavbar> = ({ page = '', isback }) => {
  const style = {
    nav: 'bg-white shadow-md grid grid-cols-[1fr_1fr_8fr] w-screen h-[80px] px-10',
    buttonWrap: 'flex mr-10 justify-center items-center',
    button: 'hover:bg-gray-100 hover:rounded-full p-2',
    logoWrap: cn(
      'h-[80px] min-w-[120px] flex justify-center',
      page === '' ? 'bg-npm-red' : 'bg-white hover:bg-gray-100'
    ),
    logo: 'px-10',
    logoColor: page === '' ? 'white' : 'black',

    links: 'h-[80px] flex justify-center',
  };

  const navItems = [
    {
      href: '/sign-up',
      text: 'Shift Sign Up',
      icon: <BsFillDoorOpenFill color={page === 'sign-up' ? 'white' : 'black'} size={25} />,
      isChosen: page === 'sign-up',
    },
    {
      href: '/cover-requests',
      text: 'Cover Requests',
      icon: <BsArrowLeftRight color={page === 'cover-requests' ? 'white' : 'black'} size={25} />,
      isChosen: page === 'cover-requests',
    },
    {
      href: '/my-shifts',
      text: 'My Shifts',
      icon: <BsFillCalendarWeekFill color={page === 'my-shifts' ? 'white' : 'black'} size={25} />,
      isChosen: page === 'my-shifts',
    },
  ];

  const router = useRouter();
  const goBack = () => router.back();

  const cornerButton = isback ? (
    <Button className={style.button} onClick={goBack}>
      <MdKeyboardBackspace size={30} />
    </Button>
  ) : (
    <ButtonWithSideBar className={style.button} />
  );

  return (
    <nav className={style.nav}>
      <div className={style.buttonWrap}>{cornerButton}</div>

      <div className={style.logoWrap}>
        <Link href="/" className={style.logo}>
          <NPM color={style.logoColor} />
        </Link>
      </div>

      <div className={style.links}>
        {navItems.map((navItem, idx) => {
          return <NavbarItem navItem={navItem} key={idx} />;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
