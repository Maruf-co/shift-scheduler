import React from 'react';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import ShiftCard, { IShiftCard } from './ShiftCard';

const ShiftCardCover: React.FC<IShiftCard> = ({
  className,
  shiftTitle = 'Wed, Apr 12, 2023 3:00 PM (4 hours)',
  shiftSubTitle = 'Location North',
  imgSrc = 'https://lh3.googleusercontent.com/V0YvtlUy_LcYx-yEaTiTo62MsE2IKkWg8hTIuPw2oCiHuBIjFu-t6wlakxxakQ=w600',
  cardLink = 'https://ya.ru',
}) => {
  return (
    <ShiftCard
      className={className}
      shiftTitle={shiftTitle}
      shiftSubTitle={shiftSubTitle}
      imgSrc={imgSrc}
      cardLink={cardLink}
      actionIcon={<BsFillArrowRightCircleFill className="text-gray-500" size={20} />}
      modal={{
        text: 'Are you sure you want to accept this shift?',
        optionText: 'swap shift',
      }}
    />
  );
};

export default ShiftCardCover;
