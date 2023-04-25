import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
// icons
import { BsMegaphoneFill } from 'react-icons/bs';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';

import Link from 'next/link';

import Button from './Button';

export interface IMenu {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  withClockIn?: boolean;
  id: string;
}

const Menu: React.FC<IMenu> = ({ withClockIn, onClose, id }) => {
  const [menuTop, setMenuTop] = useState('90px');
  const menuId = `menu_${id}`;

  useEffect(() => {
    const element = document.getElementById(menuId);

    const yCoord = Math.round(element?.getBoundingClientRect().top || 90);
    setMenuTop(`${yCoord}px`);

    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, [menuId]);

  const style = {
    icon: 'text-gray-500',
    menu: `fixed right-4 z-10 bg-white rounded shadow-2xl w-[166px]`,
    menuRow: 'hover:bg-gray-100 flex items-center w-full px-4 py-1.5',
    menuText: 'text-gray-600 pl-1.5',

    background: 'fixed z-10 inset-0 opacity-80 cursor-default',
  };

  const menuRow = (icon: React.ReactNode, text: string) => {
    return (
      <Button className={style.menuRow}>
        {icon}
        <span className={style.menuText}>{text}</span>
      </Button>
    );
  };

  const detailsOption = (
    <Link href={`my-shifts/card/${id}`} className={style.menuRow}>
      <AiOutlineMenuUnfold size={18} className={style.icon} />
      <span className={style.menuText}>Go to details</span>
    </Link>
  );

  const outsideContainer = document.querySelector('.outside-container');

  return (
    outsideContainer &&
    ReactDOM.createPortal(
      <div>
        <button onClick={onClose} className={style.background} />
        <ol className={style.menu} style={{ top: menuTop }}>
          <li>{detailsOption}</li>
          <li>{withClockIn && menuRow(<FaPlay size={15} className={style.icon} />, 'Clock In')}</li>
          <li>{menuRow(<BsMegaphoneFill size={15} className={style.icon} />, 'Request Cover')}</li>
        </ol>
      </div>,
      outsideContainer
    )
  );
};

export default Menu;
