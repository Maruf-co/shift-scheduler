import HeadMeta from "@/components/HeadMeta";
import Navbar from "@/components/Navbar";

export default function MyShifts() {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar page="my-shifts" />
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>My Shifts page</h1>
        </div>
      </main>
    </>
  );
}
