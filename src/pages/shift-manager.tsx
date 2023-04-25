import { useRouter } from 'next/router';
import { MdKeyboardBackspace } from 'react-icons/md';

import HeadMeta from '@/components/HeadMeta';
import ShiftCreatorForm from '@/components/ShiftCreatorForm';
import ButtonWithModal from '@/components/Button/ButtonWithModal';

export default function ShiftManagerPage() {
  const router = useRouter();
  const goBack = () => router.back();

  const modal = {
    text: 'Discard changes? Any edits will be lost.',
    optionText: 'discard',
  };

  return (
    <>
      <HeadMeta
        title="Shift Creator"
        description="Page to create new shift providing necessary details"
      />
      <main>
        <ButtonWithModal
          className="fixed top-0 left-0 hover:bg-gray-100 hover:rounded-full p-4"
          onClick={goBack}
          modal={modal}
        >
          <MdKeyboardBackspace size={45} />
        </ButtonWithModal>
        <ShiftCreatorForm className="mx-56" />
      </main>
    </>
  );
}
