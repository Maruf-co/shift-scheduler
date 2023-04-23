import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import SignUpBody from '@/components/SignUpBody';

export default function SignUp() {
  return (
    <>
      <HeadMeta
        title="Shift Sign Up"
        description="Page where user can pick shiftCards of the companies"
      />
      <main>
        <Navbar page="sign-up" />
        <SignUpBody className="mt-2" />
      </main>
    </>
  );
}
