import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar />
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Shift scheduling app</h1>
        </div>
      </main>
    </>
  );
}
