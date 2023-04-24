import React, { useState } from 'react';
import cn from 'classnames';

import { MdMenu } from 'react-icons/md';

import SideBar from '../Sidebar';

import Button from '.';

export interface IButtonWithSideBar {
  className?: string;
}

const ButtonWithSideBar: React.FC<IButtonWithSideBar> = ({ className }) => {
  const style = {
    wrap: 'relative',
    button: `hover:bg-gray-100 rounded-full`,
    icon: 'text-gray-500',
    background: 'fixed z-10 inset-0 bg-zinc-800 opacity-80',
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button className={cn(style.button, className)} onClick={handleOpen}>
        <MdMenu size={30} />
      </Button>
      <SideBar onClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default ButtonWithSideBar;
