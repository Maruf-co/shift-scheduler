import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

export interface ISideBar {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

const SideBar: React.FC<ISideBar> = ({ onClose, isOpen }) => {
  const style = {
    sideBar: `fixed z-10 top-0 left-0 bg-white rounded shadow-2xl min-w-[310px] w-1/3 h-full ease-in-out duration-300 
      ${isOpen ? 'translate-x-0 ' : 'translate-x-[-100%]'}`,

    background: 'fixed z-10 inset-0 bg-zinc-800 opacity-80',
  };

  return (
    <>
      {isOpen && <button onClick={onClose} className={style.background} />}
      <div className={style.sideBar}>
        <h3 className="mt-20 text-4xl font-semibold">I am a sidebar</h3>
      </div>
    </>
  );
};

export default SideBar;
