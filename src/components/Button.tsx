import React from "react";
import cn from "classnames";

export interface IButton {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick }: IButton) => {
  const classes = cn("flex items-center px-3 py-1.5 border", className);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
