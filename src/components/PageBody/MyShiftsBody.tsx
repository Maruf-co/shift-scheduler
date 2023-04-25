import React from 'react';

import { myShiftsMock } from '@/pages/api/requestsMock';
import ShiftCardMyShifts from '../ShiftCard/ShiftCardMyShifts';

export type Shift = {
  id: string;
  shiftName: string;
  date: string;
  locationName: string;
  logo: string;
};

const sortShifts = (shifts: Shift[]) => {
  let todayShifts: Shift[] = [];
  let upcomingShifts: Shift[] = [];

  const today = new Date().setHours(0, 0, 0, 0);

  shifts.forEach((shift) => {
    const shiftDate = new Date(shift.date).setHours(0, 0, 0, 0);
    if (today === shiftDate) {
      todayShifts.push(shift);
    } else if (today < shiftDate) {
      upcomingShifts.push(shift);
    }
  });

  return { todayShifts, upcomingShifts };
};

const MyShiftsBody: React.FC = () => {
  const style = {
    noShipsWrap: 'text-2xl flex items-center justify-center h-screen',
    shiftsWrap: 'flex flex-col',
    title: 'ml-4 my-8 bold',
  };

  const { todayShifts, upcomingShifts } = sortShifts(myShiftsMock);

  const noShifts = !todayShifts && !upcomingShifts && (
    <div className={style.noShipsWrap}>No shifts</div>
  );

  const renderShiftsList = (shifts: Shift[], withClockIn: boolean = false) => {
    return shifts.map((shift) => {
      return (
        <ShiftCardMyShifts
          key={shift.id}
          id={shift.id}
          shiftTitle={shift.shiftName}
          shiftSubTitle={shift.locationName}
          imgSrc={shift.logo}
          withClockIn={withClockIn}
          cardLink={`my-shifts/card/${shift.id}`}
        />
      );
    });
  };

  const renderShiftsPage = (
    <div className={style.shiftsWrap}>
      {upcomingShifts.length > 0 && <span className={style.title}>Upcoming Shifts</span>}
      {renderShiftsList(upcomingShifts)}
      {todayShifts.length > 0 && <span className={style.title}>Today&apos;s Shifts</span>}
      {renderShiftsList(todayShifts, true)}
    </div>
  );

  return noShifts || renderShiftsPage;
};

export default MyShiftsBody;
