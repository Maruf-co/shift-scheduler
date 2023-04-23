import React from 'react';

import { coverRequestsMock } from '@/pages/api/requestsMock';
import ShiftCardCover from '../ShiftCard/ShiftCardCover';

const CoverRequestsBody: React.FC = () => {
  const renderedCards = coverRequestsMock.map((card) => {
    return (
      <ShiftCardCover
        key={card.id}
        shiftTitle={card.shiftName}
        shiftSubTitle={card.locationName}
        imgSrc={card.logo}
        cardLink={`cover-requests/card/${card.id}`}
      />
    );
  });

  return <div>{renderedCards}</div>;
};

export default CoverRequestsBody;
