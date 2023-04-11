import React from 'react';
import cn from 'classnames';

import { BiCalendarPlus } from 'react-icons/bi';

import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';

export interface IShiftCard {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  shiftName?: string;
  availableShifts?: string;
  imgSrc?: string;
  cardLink?: string;
}

const ShiftCard: React.FC<IShiftCard> = ({
  className,

  shiftName = 'ср, апр. 05, 2023 7:00 PM (4 hours)',
  availableShifts = '1',
  imgSrc = 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
  cardLink = 'https://ya.ru',
}) => {
  const style = {
    cardWrap: 'relative',
    cardLink: 'absolute w-full h-full z-[1]',
    card: 'relative bg-white border-y-[0.5px] border-[#ddd] h-[90px]',
    imgWrap: 'float-left flex items-center justify-center h-[90px]',
    img: 'm-2',
    contentWrap: 'flex justify-between h-[90px] p-2',
    content: 'flex flex-col',
    date: '',
    shifts: 'text-gray-500',
    signUpButton: 'z-[1] mt-auto',
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
            <span className={style.date}>{shiftName}</span>
            <span className={style.shifts}>Available Shifts: {availableShifts}</span>
          </div>
          <Button className={style.signUpButton} onClick={() => console.log('click')} title={'Sign-Up'}>
            <BiCalendarPlus size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
