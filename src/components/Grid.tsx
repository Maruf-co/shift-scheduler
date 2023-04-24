import React from 'react';
import cn from 'classnames';

export interface IGrid {
  children: React.ReactNode[];
  className?: string;
}

const Grid: React.FC<IGrid> = ({ children, className }) => {
  const style = {
    grid: 'grid grid-cols-2 items-center gap-x-4 gap-y-8',
  };

  return <div className={cn(style.grid, className)}>{children.map((child) => child)}</div>;
};

export default Grid;
