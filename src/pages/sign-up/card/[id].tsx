import { useRouter } from 'next/router';
import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { getSignUpData } from '@/components/Card/helpers/getSignUpData';

export default function SignUpCard() {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        title="Shift card info"
        description="Page with all necessary information related to current shift card"
      />
      <main className="overflow-x-hidden">
        <Navbar page="sign-up" isback />
        <Card data={getSignUpData(router.query.id)} />
      </main>
    </>
  );
}
