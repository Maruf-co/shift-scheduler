import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';

export interface IModal {
  children?: React.ReactNode;
  actionBar?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<IModal> = ({ children, actionBar, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const style = {
    background: 'fixed z-10 inset-0 bg-zinc-800 opacity-80 cursor-default',
    modal:
      'fixed z-10 top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] bg-white rounded shadow-xl w-[384px] p-4',
    content: 'flex flex-col justify-between h-full',
    actionBar: 'flex justify-end',
  };

  return ReactDOM.createPortal(
    <div>
      <button className={style.background} onClick={onClose} />
      <div className={style.modal}>
        <div className={style.content}>
          {children}
          <div className={style.actionBar}>{actionBar}</div>
        </div>
      </div>
    </div>,
    // @ts-ignore
    document.querySelector('.outside-container')
  );
};

export default Modal;
