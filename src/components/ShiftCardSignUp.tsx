import React from 'react';

import { BiCalendarPlus } from 'react-icons/bi';

import ButtonWithModal from './ButtonWithModal';
import ShiftCard from './ShiftCard';

interface IShiftCardSignUp {
  shiftTitle: string;
  shiftSubTitle: number;
  imgSrc: string;
  cardLink?: string;
}

const ShiftCardSignUp: React.FC<IShiftCardSignUp> = ({
  shiftTitle,
  shiftSubTitle,
  imgSrc,
  cardLink = 'https://ya.ru',
}) => {
  const modal = {
    text: 'Are you sure you want to sign up for this shift?',
    optionText: 'sign-up',
  };

  const actionButton = (
    <ButtonWithModal className="z-[1] mt-auto px-3 py-1.5" tooltip="Sign-Up" modal={modal}>
      <BiCalendarPlus className="text-gray-500" size={20} />
    </ButtonWithModal>
  );

  return (
    <ShiftCard
      shiftTitle={shiftTitle}
      shiftSubTitle={`Available shifts: ${shiftSubTitle}`}
      imgSrc={imgSrc}
      cardLink={cardLink}
      actionButton={actionButton}
    />
  );
};

export default ShiftCardSignUp;
