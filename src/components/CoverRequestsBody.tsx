import React from 'react';

import { coverRequestsMock } from '@/pages/api/requestsMock';
import ShiftCardCover from './ShiftCardCover';

const CoverRequestsBody: React.FC = () => {
  const renderedCards = coverRequestsMock.map((card) => {
    return (
      <ShiftCardCover
        key={card.id}
        shiftTitle={card.shiftName}
        shiftSubTitle={card.locationName}
        imgSrc={card.logo}
      />
    );
  });

  return <div>{renderedCards}</div>;
};

export default CoverRequestsBody;
