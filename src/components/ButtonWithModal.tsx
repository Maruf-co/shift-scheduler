import React from 'react';
import cn from 'classnames';
import Modal from 'react-modal';

import Button from './Button';

export interface IButtonWithModal {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  modalText?: string;
  modalOptionText?: string;
}

const ButtonWithModal: React.FC<IButtonWithModal> = ({
  children,
  className,
  title,
  modalText = 'Are you sure?',
  modalOptionText = 'YES',
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  let subtitle: HTMLHeadingElement | null;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) {
      subtitle.style.color = 'white';
    }
  }

  return (
    <>
      <Button className={className} onClick={() => setIsOpen(true)} title={title}>
        {children}
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirmation Modal"
      >
        <h2>Confirm</h2>
        <div>{modalText}</div>
        <div className="flex">
          <Button className={className} onClick={() => setIsOpen(false)}>
            NO
          </Button>
          <Button className={className} onClick={() => console.log('Take shift (backend)')}>
            {modalOptionText}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ButtonWithModal;
