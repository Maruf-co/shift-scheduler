import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
// icons
import { BsMegaphoneFill } from 'react-icons/bs';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';

import Button from './Button';

export interface IMenu {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  withClockIn?: boolean;
  menuId?: string;
}

const Menu: React.FC<IMenu> = ({ withClockIn, onClose, menuId }) => {
  const [menuTop, setMenuTop] = useState('90px');

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  if (menuId) {
    useEffect(() => {
      const element = document.getElementById(menuId);
      // @ts-ignore
      const yCoord = Math.round(element?.getBoundingClientRect().top);
      setMenuTop(`${yCoord}px`);
    }, []);
  }

  const style = {
    icon: 'text-gray-500',
    menu: `fixed right-4 z-10 bg-white rounded shadow-2xl w-[166px]`,
    menuRow: 'hover:bg-gray-100 flex items-center w-full px-4 py-1.5',
    menuText: 'text-gray-600 pl-1.5',

    background: 'fixed z-10 inset-0 opacity-80',
  };

  const menuRow = (icon: React.ReactNode, text: string) => {
    return (
      <Button className={style.menuRow}>
        {icon}
        <span className={style.menuText}>{text}</span>
      </Button>
    );
  };

  return ReactDOM.createPortal(
    <div>
      {/* @ts-ignore */}
      <div onClick={onClose} className={style.background} />
      <ol className={style.menu} style={{ top: menuTop }}>
        <li>
          {menuRow(<AiOutlineMenuUnfold size={18} className={style.icon} />, 'Go to details')}
        </li>
        <li>{withClockIn && menuRow(<FaPlay size={15} className={style.icon} />, 'Clock In')}</li>
        <li>{menuRow(<BsMegaphoneFill size={15} className={style.icon} />, 'Request Cover')}</li>
      </ol>
    </div>,
    // @ts-ignore
    document.querySelector('.outside-container')
  );
};

export default Menu;