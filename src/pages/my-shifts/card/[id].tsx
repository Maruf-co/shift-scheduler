import { useRouter } from 'next/router';
import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { getMyShiftsData } from '@/components/Card/helpers/getMyShiftsData';

export default function MyShiftCard() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <HeadMeta
        title="Request cover card info"
        description="Page with information related to shift card that needs to be covered"
      />
      <main className="overflow-x-hidden">
        <Navbar page="my-shifts" isback />
        <Card data={getMyShiftsData(id)} />
      </main>
    </>
  );
}
