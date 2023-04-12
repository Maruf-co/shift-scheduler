import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import ShiftCardCover from '@/components/ShiftCardCover';

export default function CoverRequest() {
  return (
    <>
      <HeadMeta
        title="Cover Requests"
        description="Page where user can take shiftCards of other users who asks for covers"
      />
      <main>
        <Navbar page="cover-requests" />
        <ShiftCardCover />
        <ShiftCardCover />
        <ShiftCardCover />
      </main>
    </>
  );
}
