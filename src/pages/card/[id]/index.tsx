import Image from 'next/image';

import { BiCalendarPlus } from 'react-icons/bi';

import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import ButtonWithModal from '@/components/ButtonWithModal';
import Table from '@/components/Table';

import { shiftCardMock } from '@/pages/api/requestsMock';

type BookItem = {
  id: string;
  name: string;
  avatar: string;
};

export default function Card() {
  const style = {
    wrap: 'bg-white overflow-x-hidden',
    imgWrap: 'bg-white flex items-center justify-center w-screen',
    img: 'object-fit',
    button: 'flex flex-col items-center mx-8 my-4',
    iconWrap: 'bg-npm-red rounded-full p-3',
    icon: 'text-white',
    buttonText: 'text-xs text-stone-700 font-bold mt-1.5',
    dataWrap: 'flex flex-col m-4',
    title: 'text-stone-700 text-xs mt-4 mb-1',
    organization: 'text-stone-950 font-bold',
    value: 'text-stone-950',
    bookingsWrap: '',
    bookingsBox: 'flex items-center my-4 ml-4',
    bookingsTitle: 'text-stone-800 text-xs',
    counterBox: 'bg-gray-200 rounded text-sm text-stone-700 font-extralight m-2.5 px-1',
    table: 'm-4',
    tableImg: 'mx-auto',
  };

  const modal = {
    text: 'Are you sure you want to sign up for this shift?',
    optionText: 'sign-up',
  };

  const { locationName, logo, scheduledDate, startTime, endTime, capacity, available, booked } =
    shiftCardMock;

  const cardData = [
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
      value: available === '0' ? 'No Available Shifts' : `Available Shifts: ${available}`,
    },
  ];

  const tableConfig = [
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
      label: 'UserID',
      render: (item: BookItem) => item.id,
    },
  ];
  const tableKeyFn = (item: BookItem) => item.id;

  return (
    <>
      <HeadMeta
        title="Shift card info"
        description="Page with all necessary information related to current shift card"
      />
      <main className={style.wrap}>
        <Navbar page="sign-up" />
        <div className={style.imgWrap}>
          <Image
            src={logo}
            alt="Organization logo"
            width={600}
            height={300}
            className={style.img}
          />
        </div>

        <ButtonWithModal className={style.button} tooltip="Sign-Up" modal={modal}>
          <div className={style.iconWrap}>
            <BiCalendarPlus className={style.icon} size={20} />
          </div>
          <span className={style.buttonText}>SIGN-UP</span>
        </ButtonWithModal>

        <div className={style.dataWrap}>
          {cardData.map((dataItem, idx) => {
            return (
              <>
                <span className={style.title}>{dataItem.title}</span>
                <span className={idx === 0 ? style.organization : style.value}>
                  {dataItem.value}
                </span>
              </>
            );
          })}
        </div>
        <hr />
        <div className={style.bookingsWrap}>
          <div className={style.bookingsBox}>
            <span className={style.bookingsTitle}>Related Bookings</span>
            <div className={style.counterBox}>{booked.length}</div>
          </div>
          <Table className={style.table} data={booked} config={tableConfig} keyFn={tableKeyFn} />
        </div>
      </main>
    </>
  );
}
