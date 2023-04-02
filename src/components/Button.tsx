import React from "react";
import cn from "classnames";

export interface IButton {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButton> = ({ children, className, onClick }) => {
  const classes = cn("flex items-center px-3 py-1.5", className);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
