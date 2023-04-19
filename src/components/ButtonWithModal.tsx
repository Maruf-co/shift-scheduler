import React, { useState } from 'react';

import Button from './Button';
import Modal from './Modal';

export interface IButtonWithModal {
  className?: string;
  children?: React.ReactNode;
  title?: string;

  modal?: {
    text: string;
    optionText: string;
  };
}

const ButtonWithModal: React.FC<IButtonWithModal> = ({
  children,
  className,
  title,
  modal = {
    text: 'Are you sure?',
    optionText: 'yes',
  },
}) => {
  const [showModal, setShowModal] = useState(false);

  const style = {
    modal:
      'z-100 top-1/2 right-1/2 bottom-auto left-auto mr-[-50%] translate-x-[-50%] translate-y-[-50%]',
    title: 'text-2xl',
    content: 'pt-4 pb-10',
    buttons: 'flex',
    button: 'font-medium text-npm-blue py-2.5 px-4 ml-4',
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div className={style.buttons}>
      <Button className={style.button} onClick={handleClose}>
        NO
      </Button>
      <Button className={style.button} onClick={() => console.log('Take shift (backend)')}>
        {modal.optionText.toUpperCase()}
      </Button>
    </div>
  );

  const modalComponent = (
    <Modal actionBar={actionBar}>
      <h2 className={style.title}>Confirm</h2>
      <p className={style.content}>{modal.text}</p>
    </Modal>
  );

  return (
    <>
      <Button className={className} onClick={handleOpen} title={title}>
        {children}
      </Button>
      {showModal && modalComponent}
    </>
  );
};

export default ButtonWithModal;
