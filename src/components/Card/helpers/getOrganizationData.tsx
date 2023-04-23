import { organizationMock } from '@/pages/api/requestsMock';

import Image from 'next/image';

type Shift = {
  startDate: string;
  startTime: string;
  endTime: string;
  capacity: string;
  repeatDays: string[];
};

export const getOrganizationData = (id: string | string[] | undefined) => {
  const style = {
    imgWrap: 'flex items-center',
    tableImg: 'mx-auto pr-2',
    iconWrap: 'bg-npm-red rounded-full p-3',
    icon: 'text-white',
    buttonText: 'text-xs text-stone-700 font-bold mt-1.5',
  };

  const { name, logo, location, shifts } = organizationMock;

  const data = {
    logo,
    cardList: [
      {
        title: 'Name',
        value: name,
      },
      {
        title: 'ID',
        value: id,
      },
      {
        title: 'Address',
        value: location,
      },
    ],
    table: {
      data: shifts,
      config: [
        {
          label: 'Name',
          render: () => (
            <div className={style.imgWrap}>
              <Image
                src={logo}
                alt="Organization's logo"
                width={25}
                height={29}
                className={style.tableImg}
              />
              <span>{name}</span>
            </div>
          ),
        },
        {
          label: 'Scheduled Start Date',
          render: (shift: Shift) => shift.startDate,
        },
        {
          label: 'Scheduled Start Time',
          render: (shift: Shift) => shift.startTime,
        },
        {
          label: 'Scheduled End Time',
          render: (shift: Shift) => shift.endTime,
        },
        {
          label: 'Capacity',
          render: (shift: Shift) => shift.capacity,
        },
        {
          label: 'Repeats on which day(s) of week?',
          render: (shift: Shift) => (
            <span>
              {shift.repeatDays.map((day, idx) => {
                return `${idx !== 0 ? ', ' : ''}${day}`;
              })}
            </span>
          ),
        },
      ],
      keyFn: (shift: Shift) => `${shift.startDate}_${shift.startTime}`,
    },
  };

  return data;
};
