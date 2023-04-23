import { useRouter } from 'next/router';
import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { getCoverData } from '@/components/Card/helpers/getCoverData';

export default function CoverRequestCard() {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        title="Request cover card info"
        description="Page with information related to shift card that needs to be covered"
      />
      <main className="overflow-x-hidden">
        <Navbar page="cover-requests" isback />
        <Card data={getCoverData(router.query.id)} />
      </main>
    </>
  );
}
