import React from 'react';

import ButtonWithMenu from './ButtonWithMenu';

import ShiftCard from './ShiftCard';

interface IShiftCardMyShifts {
  shiftTitle: string;
  shiftSubTitle: string;
  imgSrc: string;
  cardLink?: string;
  withClockIn?: boolean;
  id: string;
}

const ShiftCardMyShifts: React.FC<IShiftCardMyShifts> = ({
  shiftTitle,
  shiftSubTitle,
  imgSrc,
  cardLink = 'https://ya.ru',
  withClockIn,
  id,
}) => {
  return (
    <ShiftCard
      shiftTitle={shiftTitle}
      shiftSubTitle={shiftSubTitle}
      imgSrc={imgSrc}
      cardLink={cardLink}
      actionButton={
        <ButtonWithMenu withClockIn={withClockIn} className="z-[1] my-auto p-3" cardId={id} />
      }
    />
  );
};

export default ShiftCardMyShifts;
