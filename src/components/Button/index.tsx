import React from 'react';
import cn from 'classnames';
import Tooltip from '../Tooltip';

export interface IButton {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  id?: string;
}

const Button: React.FC<IButton> = ({ children, className, tooltip, ...props }) => {
  const style = {
    button: cn('flex items-center', className),
    tooltip: 'bg-gray-500 text-white rounded',
  };

  const buttonComponent = (
    <button className={style.button} {...props}>
      {children}
    </button>
  );

  const buttonWithTooltip = tooltip && <Tooltip content={tooltip}>{buttonComponent}</Tooltip>;

  return buttonWithTooltip || buttonComponent;
};

export default Button;
