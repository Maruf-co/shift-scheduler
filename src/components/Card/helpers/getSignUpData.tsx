import { shiftSignUpMock } from '@/pages/api/requestsMock';

import Image from 'next/image';
import Link from 'next/link';
import { BiCalendarPlus } from 'react-icons/bi';

type BookItem = {
  id: string;
  name: string;
  avatar: string;
};

export const getSignUpData = (
  id: string | string[] | undefined,
  orgIdx: string | string[] | undefined,
  cardIdx: string | string[] | undefined
) => {
  const style = {
    tableImg: 'mx-auto',
    iconWrap: 'bg-npm-red rounded-full p-3',
    icon: 'text-white',
    buttonText: 'text-xs text-stone-700 font-bold mt-1.5',
    userWithAvatar: 'hover:bg-gray-100 rounded cursor-pointer flex items-center justify-start pr-2',
    userText: 'ml-3',
  };

  const idxOrg: number = orgIdx ? +orgIdx : 0;
  const idxCard: number = cardIdx ? +cardIdx : 0;
  const card = shiftSignUpMock[idxOrg].cards[idxCard];
  const { scheduledDate, startTime, endTime, capacity, available, booked } = card;
  const { locationName, logo } = shiftSignUpMock[idxOrg];

  const data = {
    logo,
    buttons: [
      {
        icon: (
          <div className={style.iconWrap}>
            <BiCalendarPlus className={style.icon} size={20} />
          </div>
        ),
        text: <span className={style.buttonText}>SIGN-UP</span>,
        tooltip: 'Sign-Up',
        modal: {
          text: 'Are you sure you want to sign up for this shift?',
          optionText: 'sign-up',
        },
      },
    ],
    cardList: [
      {
        title: 'Organization',
        value: locationName,
      },
      {
        title: 'Scheduled Date',
        value: scheduledDate,
      },
      {
        title: 'Scheduled Start Time',
        value: startTime,
      },
      {
        title: 'Scheduled End Time',
        value: endTime,
      },
      {
        title: 'Capacity',
        value: capacity,
      },
      {
        title: 'Open Shifts',
        value: available === 0 ? 'No Available Shifts' : `Available Shifts: ${available}`,
      },
    ],
    table: {
      data: booked,
      config: [
        {
          label: 'Name',
          render: (item: BookItem) => item.name,
        },
        {
          label: 'Profile Pic',
          render: (item: BookItem) => (
            <Image
              src={item.avatar}
              alt="User's avatar"
              width={25}
              height={29}
              className={style.tableImg}
            />
          ),
        },
        {
          label: 'Profile',
          render: (item: BookItem) => (
            <Link className={style.userWithAvatar} href={`/user/${item.id}`}>
              <Image src={item.avatar} alt="User's avatar" width={16} height={17} />
              <span className={style.userText}>{item.name}</span>
            </Link>
          ),
        },
        {
          label: 'UserID',
          render: (item: BookItem) => item.id,
        },
      ],
      keyFn: (item: BookItem) => item.id,
    },
  };

  return data;
};
