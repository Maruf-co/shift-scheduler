import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';

export default function CoverRequest() {
  return (
    <>
      <HeadMeta
        title="Cover Requests"
        description="Page where user can take shiftCards of other users who asks for covers"
      />
      <main>
        <Navbar page="cover-requests" />
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Cover Request page</h1>
        </div>
      </main>
    </>
  );
}
