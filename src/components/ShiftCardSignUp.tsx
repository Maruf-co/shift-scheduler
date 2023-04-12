import React from 'react';

import { BiCalendarPlus } from 'react-icons/bi';

import ShiftCard, { IShiftCard } from './ShiftCard';

const ShiftCardSignUp: React.FC<IShiftCard> = ({
  className,
  shiftTitle = 'ср, апр. 05, 2023 7:00 PM (4 hours)',
  shiftSubTitle = '1',
  imgSrc = 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
  cardLink = 'https://ya.ru',
}) => {

  return (
    <ShiftCard
      className={className}
      shiftTitle={shiftTitle}
      shiftSubTitle={`Available shifts: ${shiftSubTitle}`}
      imgSrc={imgSrc}
      cardLink={cardLink}
      actionIcon={<BiCalendarPlus className='text-gray-500' size={20} />}
    />
  );
};

export default ShiftCardSignUp;
