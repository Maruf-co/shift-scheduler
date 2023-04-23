import { coverShiftCardMock } from '@/pages/api/requestsMock';
import Image from 'next/image';
import Link from 'next/link';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const getCoverData = (id: string | string[] | undefined) => {
  const style = {
    userWithAvatar: 'hover:bg-gray-100 rounded cursor-pointer flex items-center justify-start pr-2',
    userText: 'ml-3',
    iconWrap: 'bg-npm-red rounded-full p-3',
    icon: 'text-white',
    buttonText: 'text-xs text-stone-700 font-bold mt-1.5',
  };

  const { shiftName, locationName, logo, currentOwner } = coverShiftCardMock;

  const data = {
    logo,
    buttons: [
      {
        icon: (
          <div className={style.iconWrap}>
            <BsFillArrowRightCircleFill className={style.icon} size={20} />
          </div>
        ),
        text: (
          <span className={style.buttonText}>
            SWAP <br /> SHIFTS
          </span>
        ),
        tooltip: 'Swap Shifts',
        modal: {
          text: 'Are you sure you want accept this shift?',
          optionText: 'swap shifts',
        },
      },
    ],
    cardList: [
      {
        title: 'Organization',
        value: locationName,
      },
      {
        title: 'Slot ID',
        value: shiftName,
      },
      {
        title: 'Current Shift Owner',
        value: (
          <Link className={style.userWithAvatar} href={`/user/${currentOwner.id}`}>
            <Image src={currentOwner.avatar} alt="User's avatar" width={16} height={17} />
            <span className={style.userText}>{currentOwner.name}</span>
          </Link>
        ),
      },
    ],
  };

  return data;
};
