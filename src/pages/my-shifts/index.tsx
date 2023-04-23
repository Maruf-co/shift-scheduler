import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import MyShiftsBody from '@/components/PageBody/MyShiftsBody';

export default function MyShifts() {
  return (
    <>
      <HeadMeta
        title="My Shifts"
        description="Page with shifts of the user where he/she can also pick new ones"
      />
      <main>
        <Navbar page="my-shifts" />
        <MyShiftsBody />
      </main>
    </>
  );
}
