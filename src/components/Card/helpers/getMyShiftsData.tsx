import { BsMegaphoneFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { myShiftsMock } from '@/pages/api/requestsMock';

export const getMyShiftsData = (id: string | string[] | undefined) => {
  const style = {
    userWithAvatar: 'flex items-center',
    iconWrap: 'bg-npm-red rounded-full p-3',
    icon: 'text-white',
    buttonText: 'text-xs text-stone-700 font-bold mt-1.5',
    userText: 'ml-3',
  };

  const card = myShiftsMock.find((item) => id === item.id);
  const { date, employee } = card || myShiftsMock[0];

  const today = new Date().setHours(0, 0, 0, 0);
  // @ts-ignore
  const curDate = new Date(date).setHours(0, 0, 0, 0);
  const status = today === curDate ? "Today's Shifts" : 'Upcoming Shifts';

  const data = {
    buttons: [
      {
        icon: (
          <div className={style.iconWrap}>
            <FaPlay className={style.icon} size={20} />
          </div>
        ),
        text: <span className={style.buttonText}>CLOCK IN</span>,
        tooltip: 'Clock In',
        modal: {
          text: 'Are you sure you want accept this shift? Make sure you have clocked out of other shifts!',
          optionText: 'clock in',
        },
      },
      {
        icon: (
          <div className={style.iconWrap}>
            <BsMegaphoneFill className={style.icon} size={20} />
          </div>
        ),
        text: (
          <span className={style.buttonText}>
            REQUEST <br />
            COVER
          </span>
        ),
        tooltip: 'Request Cover',
        modal: {
          text: 'Are you sure you want accept this shift?',
          optionText: 'swap shifts',
        },
      },
    ],
    cardList: [
      {
        title: 'Employee',
        value: employee,
      },
      {
        title: 'Scheduled Shift Date',
        value: date,
      },
      {
        title: 'Status',
        value: status,
      },
    ],
  };

  return data;
};
