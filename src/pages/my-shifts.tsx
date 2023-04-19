import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import ShiftCardSignUp from '@/components/ShiftCardSignUp';

export default function MyShifts() {
  return (
    <>
      <HeadMeta
        title="My Shifts"
        description="Page with shifts of the user where he/she can also pick new ones"
      />
      <main>
        <Navbar page="my-shifts" />
        {/* <div className="text-2xl flex items-center justify-center h-screen">
          <h1>My Shifts page</h1>
        </div> */}
        <div className=""></div>
      </main>
    </>
  );
}
