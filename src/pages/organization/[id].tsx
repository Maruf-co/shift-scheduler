import { useRouter } from 'next/router';
import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';
import Card from '@/components/Card';
import { getOrganizationData } from '@/components/Card/helpers/getOrganizationData';

export default function OrganizationCard() {
  const router = useRouter();

  return (
    <>
      <HeadMeta
        title="Organization info"
        description="Page with all information related to current organization"
      />
      <main className="overflow-x-hidden">
        <Navbar page="sign-up" isback />
        <Card data={getOrganizationData(router.query.id)} />
      </main>
    </>
  );
}
