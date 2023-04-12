import React from 'react';
import cn from 'classnames';

import Image from 'next/image';
import Link from 'next/link';

import ButtonWithModal from './ButtonWithModal';

export interface IShiftCard {
  className?: string;
  actionTitle?: string;

  // !!! should be non-optional
  shiftTitle?: string;
  shiftSubTitle?: string;
  imgSrc?: string;
  cardLink?: string;
  actionIcon?: React.ReactNode;
}

const ShiftCard: React.FC<IShiftCard> = ({
  className,

  shiftTitle,
  shiftSubTitle,
  imgSrc,
  cardLink,
  actionIcon,
  actionTitle,
}) => {
  const style = {
    cardWrap: 'relative',
    cardLink: 'absolute w-full h-full z-[1]',
    card: 'relative bg-white border-y-[0.5px] border-[#ddd] h-[90px]',
    imgWrap: 'float-left flex items-center justify-center h-[90px]',
    img: 'm-2',
    contentWrap: 'flex justify-between h-[90px] p-2',
    content: 'flex flex-col',
    subTitle: 'text-sm text-gray-500 pt-1',
    actionButton: 'z-[1] mt-auto',
  };

  return (
    <div className={style.cardWrap}>
      <Link href={cardLink} className={style.cardLink} />
      <div className={cn(style.card, className)}>
        <div className={style.imgWrap}>
          <Image className={style.img} src={imgSrc} alt="shiftCard image" width={70} height={70} />
        </div>
        <div className={style.contentWrap}>
          <div className={style.content}>
            <span>{shiftTitle}</span>
            <span className={style.subTitle}>{shiftSubTitle}</span>
          </div>

          {/* <Button className={style.actionButton} onClick={openModal}>
            {actionIcon}
          </Button>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal> */}
          <ButtonWithModal className={style.actionButton} title={actionTitle}>
            {actionIcon}
          </ButtonWithModal>
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
