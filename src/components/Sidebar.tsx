import React, { useState } from 'react';
import NPM from '../../public/NPM';

import {
  BsFillCheckCircleFill,
  BsPeopleFill,
  BsListUl,
  BsFillInfoCircleFill,
  BsShareFill,
} from 'react-icons/bs';
import Button from './Button';
import Link from 'next/link';
// BsFillCheckCircleFill

export interface ISideBar {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const SideBar: React.FC<ISideBar> = ({ onClose, isOpen }) => {
  const style = {
    background: 'fixed z-10 inset-0 bg-zinc-800 opacity-80 cursor-default',
    sideBar: `fixed z-10 top-0 left-0 bg-white rounded shadow-2xl min-w-[310px] w-1/3 h-full ease-in-out duration-300 
      ${isOpen ? 'translate-x-0 ' : 'translate-x-[-100%]'}`,

    content: 'flex flex-col',
    logo: 'flex items-center p-4 border-b-2',
    npm: 'bg-npm-red rounded-xl py-2 px-1 mr-4',
    logoTitle: 'text-2xl',
    options: '',
    option: `text-gray-500 flex items-center pl-6 py-3 w-full 
      hover:bg-red-200 hover:border-l-4 hover:border-npm-red hover:text-npm-red`,
    optionLogo: 'mr-4',
    optionText: 'text-xl',
    profile: '',
  };

  const renderLogo = (
    <div className={style.logo}>
      <div className={style.npm}>
        <NPM color="white" height="50px" width="75px" />
      </div>
      <h3 className={style.logoTitle}>Shift Scheduler</h3>
    </div>
  );

  const optionsList = [
    {
      icon: <BsFillCheckCircleFill className={style.optionLogo} size={20} />,
      text: 'Clocked In',
      href: '/clocked-in',
    },
    {
      icon: <BsPeopleFill className={style.optionLogo} size={20} />,
      text: 'Employee Directory',
      href: '/employee-list',
    },
    {
      icon: <BsListUl className={style.optionLogo} size={20} />,
      text: 'Instructions',
      href: '/instructions',
    },
    {
      icon: <BsFillInfoCircleFill className={style.optionLogo} size={20} />,
      text: 'About',
      href: '/about',
    },
    {
      icon: <BsShareFill className={style.optionLogo} size={20} />,
      text: 'Share',
      href: 'mailto:friend@gmail.com',
    },
  ];

  const renderOptionsList = (
    <>
      {optionsList.map((option) => {
        return (
          <Link
            className={style.option}
            // @ts-ignore
            onClick={onClose}
            href={option.href}
          >
            {option.icon}
            <span className={style.optionText}>{option.text}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      {isOpen && <button onClick={onClose} className={style.background} />}
      <div className={style.sideBar}>
        <div className={style.content}>{renderLogo}</div>
        <div className={style.options}>{renderOptionsList}</div>

        <div className={style.profile}></div>
      </div>
    </>
  );
};

export default SideBar;
