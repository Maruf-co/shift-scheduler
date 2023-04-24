import { useRouter } from 'next/router';
import Link from 'next/link';

import HeadMeta from '@/components/HeadMeta';

export default function NotFoundPage() {
  const style = {
    wrap: 'bg-neutral w-screen h-screen',
    container: 'flex items-center justify-center h-screen',
    content: 'flex items-center',
    errorCode: 'flex items-center text-npm-red text-2xl border-r-2 pr-4 mr-4 my-auto h-[50px]',
    errorText: 'text-npm-red text-xl',
    link: 'underline pl-2',
  };

  return (
    <>
      <HeadMeta
        title="404: This page could not be found"
        description="404 Error, this page not found. Shift Scheduler App from NPM Enjoyers"
      />
      <main className={style.wrap}>
        <div className={style.container}>
          <div className={style.content}>
            <h1 className={style.errorCode}>404</h1>
            <h2 className={style.errorText}>
              This page could not be found.
              <Link href="/" className={style.link}>
                Go back
              </Link>
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
