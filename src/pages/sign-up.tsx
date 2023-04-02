import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";

export default function SignUp() {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar page="sign-up" />
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Shift sign up page</h1>
        </div>
      </main>
    </>
  );
}
