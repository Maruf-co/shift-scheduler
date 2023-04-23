import { useRouter } from 'next/router';
import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { getUserData } from '@/components/Card/helpers/getUserData';

export default function UserCard() {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        title="User info"
        description="Information about employee with necessary info and contacts"
      />
      <main className="overflow-x-hidden">
        <Navbar page="" isback />
        <Card data={getUserData(router.query.id)} />
      </main>
    </>
  );
}
