import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';

export default function ClockedIn() {
  return (
    <>
      <HeadMeta
        title="Clocked in"
        description="Page with list of users who clocked in for their shifts"
      />
      <main>
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Clocked in</h1>
        </div>
      </main>
    </>
  );
}
