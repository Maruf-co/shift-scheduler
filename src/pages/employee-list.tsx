import Image from 'next/image';

import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Grid from '@/components/Grid';
import { usersListMock } from './api/requestsMock';

export default function EmployeeList() {
  const style = {
    container: 'border-2 rounded-lg bg-white hover:shadow-lg flex flex-col px-4 pb-4 h-[280px]',
    img: 'mx-auto',
    textWrap: 'flex flex-col items-start pt-4',
    title: 'text-2xl text-gray-700',
    text: 'text-gray-500',
  };

  return (
    <>
      <HeadMeta
        title="Employee Directory"
        description="Page with list of all employee who are assigned to this app"
      />
      <main>
        <Navbar isback />
        <Grid className="my-8 mx-32">
          {usersListMock.map((user) => {
            return (
              <div className={style.container} key={user.id}>
                <Image
                  src={user.avatar}
                  alt="User's avatar"
                  width={130}
                  height={194}
                  className={style.img}
                />
                <div className={style.textWrap}>
                  <h3 className={style.title}>{user.name}</h3>
                  <h6 className={style.text}>{user.position}</h6>
                </div>
              </div>
            );
          })}
        </Grid>
      </main>
    </>
  );
}
