import React from 'react';
import cn from 'classnames';

import { BiCalendarPlus } from "react-icons/bi";
//BiCalendarPlus

import Image from 'next/image';

import Button from './Button';

export interface IShiftCard {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ShiftCard: React.FC<IShiftCard> = ({ children, className }) => {
  const style = {
    cardWrap: 'bg-white border-y-[0.5px] border-[#ddd] h-[90px]',
    imgWrap: 'float-left flex items-center justify-center h-[90px]',
    img: 'm-2',
    contentWrap: 'flex justify-between h-[90px] p-2',
    content: 'flex flex-col',
    date: '',
    shifts: 'text-gray-500',
    signUpButton: 'mt-auto',
  };

  return (
    <div className={style.cardWrap}>
      <div className={style.imgWrap}>
        <Image
          className={style.img}
          src="https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600"
          alt="shiftCard image"
          width={70}
          height={70}
        />
      </div>
      <div className={style.contentWrap}>
        <div className={style.content}>
            <span className={style.date}>ср, апр. 05, 2023 7:00 PM (4 hours)</span>
            <span className={style.shifts}>Available Shifts: 1</span>
        </div>
        <Button className={style.signUpButton}><BiCalendarPlus size={20}/></Button>
      </div>
    </div>
  );
};

export default ShiftCard;
