import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Instructions from '@/components/Instructions';

export default function Home() {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar />
        <Instructions />
      </main>
    </>
  );
}
