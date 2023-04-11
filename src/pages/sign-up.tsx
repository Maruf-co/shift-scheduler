import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import ShiftCard from '@/components/ShiftCard';

export default function SignUp() {
  return (
    <>
      <HeadMeta title="Shift Sign Up" description="Page where user can pick shiftCards of the companies" />
      <main>
        <Navbar page="sign-up" />
        {/* <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Shift sign up page</h1>
        </div> */}
        <ShiftCard />
        <ShiftCard />
        <ShiftCard />
        <ShiftCard />
        <ShiftCard />
      </main>
    </>
  );
}
