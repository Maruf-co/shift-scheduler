import React from 'react';
import { Tooltip as LibTooltip } from '@material-tailwind/react';

export interface ITooltip {
  children: React.ReactNode;
  content: string;
}

const Tooltip: React.FC<ITooltip> = ({ children, content }) => {
  return (
    <LibTooltip
      content={content}
      placement="bottom-start"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: -15 },
      }}
      className="bg-gray-500 text-white rounded"
    >
      {children}
    </LibTooltip>
  );
};

export default Tooltip;
