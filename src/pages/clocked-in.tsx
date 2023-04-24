import Image from 'next/image';

import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Grid from '@/components/Grid';
import ButtonWithModal from '@/components/Button/ButtonWithModal';

import { ClockInListMock } from './api/requestsMock';
import { BiExit } from 'react-icons/bi';

export default function ClockedIn() {
  const style = {
    container:
      'relative border-2 rounded-lg bg-white hover:shadow-lg flex items-center p-2 h-[90px]',
    imgWrap: 'w-[60px] h-[70px]',
    img: 'object-cover h-full w-full',
    textWrap: 'flex flex-col items-start ml-4',
    title: 'text-xl text-gray-700',
    text: 'text-sm text-gray-500',
    iconWrap: 'absolute right-4',
    icon: 'text-gray-500',
  };

  const modal = {
    text: 'Are you sure you want to clock out from this shift?',
    optionText: 'clock out',
  };

  return (
    <>
      <HeadMeta
        title="Clocked in"
        description="Page with list of users who clocked in for their shifts"
      />
      <main>
        <Navbar isback />
        <Grid className="my-8 mx-40">
          {ClockInListMock.map((user) => {
            return (
              <div className={style.container} key={user.userId}>
                <div className={style.imgWrap}>
                  <Image
                    src={user.avatar}
                    alt="User's avatar"
                    height={70}
                    width={55}
                    className={style.img}
                  />
                </div>
                <div className={style.textWrap}>
                  <h4 className={style.title}>{user.name}</h4>
                  <p className={style.text}>{user.shiftName}</p>
                </div>
                <ButtonWithModal tooltip="Clock Out" modal={modal} className={style.iconWrap}>
                  <BiExit className={style.icon} size={20} />
                </ButtonWithModal>
              </div>
            );
          })}
        </Grid>
      </main>
    </>
  );
}
