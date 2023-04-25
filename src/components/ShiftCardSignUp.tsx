import React from 'react';

import { BiCalendarPlus } from 'react-icons/bi';

import ButtonWithModal from './Button/ButtonWithModal';
import ShiftCard from './ShiftCard';

interface IShiftCardSignUp {
  shiftTitle: string;
  shiftSubTitle: number;
  imgSrc: string;
  cardLink: string;
}

const ShiftCardSignUp: React.FC<IShiftCardSignUp> = ({
  shiftTitle,
  shiftSubTitle,
  imgSrc,
  cardLink,
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

  const availability =
    shiftSubTitle === 0 ? 'No Available shifts' : `Available shifts: ${shiftSubTitle}`;

  return (
    <ShiftCard
      shiftTitle={shiftTitle}
      shiftSubTitle={availability}
      imgSrc={imgSrc}
      cardLink={cardLink}
      actionButton={actionButton}
    />
  );
};

export default ShiftCardSignUp;
