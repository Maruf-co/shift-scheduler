import { useRouter } from 'next/router';
import { MdKeyboardBackspace } from 'react-icons/md';

import HeadMeta from '@/components/HeadMeta';
import Instructions from '@/components/Instructions';
import Button from '@/components/Button';

export default function InstructionsPage() {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <>
      <HeadMeta
        title="Instructions"
        description="Page with instructions on how to manage this web-app"
      />
      <main>
        <Button
          className="fixed top-0 left-0 hover:bg-gray-100 hover:rounded-full p-4"
          onClick={goBack}
        >
          <MdKeyboardBackspace size={45} />
        </Button>
        <Instructions />
      </main>
    </>
  );
}
