import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ButtonWithModal, { IButtonWithModal } from './ButtonWithModal';

export interface IShiftCard {
  shiftTitle: string;
  shiftSubTitle: string;
  imgSrc: string;
  cardLink: string;
  actionButton: React.ReactNode;
}

const ShiftCard: React.FC<IShiftCard> = ({
  shiftTitle,
  shiftSubTitle,
  imgSrc,
  cardLink,
  actionButton,
}) => {
  const style = {
    cardWrap: 'relative h-[90px]',
    cardLink: 'absolute w-full h-full z-[1]',
    card: 'relative bg-white border-y-[0.5px] border-[#ddd] h-[90px]',
    imgWrap: 'float-left flex items-center justify-center h-[90px]',
    img: 'm-2',
    contentWrap: 'flex justify-between h-[90px] p-2',
    content: 'flex flex-col',
    subTitle: 'text-sm text-gray-500 pt-1',
  };

  return (
    <div className={style.cardWrap}>
      <Link href={cardLink} className={style.cardLink} />
      <div className={style.card}>
        <div className={style.imgWrap}>
          <Image className={style.img} src={imgSrc} alt="shiftCard image" width={70} height={70} />
        </div>
        <div className={style.contentWrap}>
          <div className={style.content}>
            <span>{shiftTitle}</span>
            <span className={style.subTitle}>{shiftSubTitle}</span>
          </div>

          {actionButton}
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
