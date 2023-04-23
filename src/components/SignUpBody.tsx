import React from 'react';

import Image from 'next/image';

import { shiftSignUpMock } from '@/pages/api/requestsMock';
import ShiftCardSignUp from './ShiftCardSignUp';

const SignUpBody: React.FC<{ className?: string }> = ({ className }) => {
  const style = {
    wrap: 'flex flex-col',
    organizationWrap: 'flex items-center pl-3 py-[5px]',
    organizationBox: 'hover:bg-gray-100 rounded cursor-pointer flex p-1',
    logo: 'pr-3',
    title: 'font-bold text-stone-700',
    counterBox: 'bg-gray-200 rounded text-sm text-stone-700 font-extralight m-2.5 px-1',
  };

  const renderedBody = shiftSignUpMock.map((organization, idx) => {
    const renderedCards = organization.cards.map((card) => {
      return (
        <ShiftCardSignUp
          key={card.id}
          shiftTitle={card.shiftName}
          shiftSubTitle={card.available}
          imgSrc={organization.logo}
          cardLink={`card/${card.id}`}
        />
      );
    });

    return (
      <div className={style.wrap} key={idx}>
        <div className={style.organizationWrap}>
          <div
            className={style.organizationBox}
            onClick={() => console.log('open organization page')}
          >
            <div className={style.logo}>
              <Image src={organization.logo} alt="Organization logo" width={27} height={26} />
            </div>
            <span className={style.title}>{organization.locationName}</span>
          </div>
          <div className={style.counterBox}>{renderedCards.length}</div>
        </div>
        {renderedCards}
      </div>
    );
  });

  return <div className={className}>{renderedBody}</div>;
};

export default SignUpBody;
