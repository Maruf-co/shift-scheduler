import React from "react";
import cn from "classnames";

export interface IButton {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const Button: React.FC<IButton> = ({ children, className, ...props }) => {
  const classes = cn("flex items-center px-3 py-1.5", className);

  return (
    <button className={classes} {...props} >
      {children}
    </button>
  );
};

export default Button;
