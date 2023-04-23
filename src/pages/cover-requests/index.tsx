import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import CoverRequestsBody from '@/components/PageBody/CoverRequestsBody';

export default function CoverRequest() {
  return (
    <>
      <HeadMeta
        title="Cover Requests"
        description="Page where user can take shiftCards of other users who asks for covers"
      />
      <main>
        <Navbar page="cover-requests" />
        <CoverRequestsBody />
      </main>
    </>
  );
}
