import React, { useState } from 'react';
import cn from 'classnames';

import { GoKebabVertical } from 'react-icons/go';

import Menu from './Menu';

import Button from './Button';

export interface IButtonWithMenu {
  className?: string;
  withClockIn?: boolean;
  cardId?: string;
}

const ButtonWithMenu: React.FC<IButtonWithMenu> = ({ className, withClockIn, cardId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const menuId = `menu_${cardId}`;

  const style = {
    wrap: 'relative',
    button: `hover:bg-gray-100 rounded-full`,
    icon: 'text-gray-500',
  };

  return (
    <>
      <Button className={cn(style.button, className)} onClick={handleOpen} id={menuId}>
        <GoKebabVertical className={style.icon} size={20} />
      </Button>
      {isOpen && <Menu withClockIn={withClockIn} onClose={handleClose} menuId={menuId} />}
    </>
  );
};

export default ButtonWithMenu;
