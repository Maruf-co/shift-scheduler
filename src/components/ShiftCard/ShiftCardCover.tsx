import React from 'react';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import ButtonWithModal from '../Button/ButtonWithModal';
import ShiftCard from '.';

interface IShiftCardCover {
  shiftTitle: string;
  shiftSubTitle: string;
  imgSrc: string;
  cardLink: string;
}

const ShiftCardCover: React.FC<IShiftCardCover> = ({
  shiftTitle,
  shiftSubTitle,
  imgSrc,
  cardLink,
}) => {
  const modal = {
    text: 'Are you sure you want to accept this shift?',
    optionText: 'swap shift',
  };

  const actionButton = (
    <ButtonWithModal className="z-[1] mt-auto px-3 py-1.5" tooltip="Swap Shifts" modal={modal}>
      <BsFillArrowRightCircleFill className="text-gray-500" size={20} />
    </ButtonWithModal>
  );

  return (
    <ShiftCard
      shiftTitle={shiftTitle}
      shiftSubTitle={shiftSubTitle}
      imgSrc={imgSrc}
      cardLink={cardLink}
      actionButton={actionButton}
    />
  );
};

export default ShiftCardCover;
