import { useRouter } from 'next/router';

import NPM from '../../public/NPM';
import { MdKeyboardBackspace } from 'react-icons/md';

import HeadMeta from '@/components/HeadMeta';
import Button from '@/components/Button';

export default function About() {
  const style = {
    button: 'fixed top-0 left-0 hover:bg-gray-100 hover:rounded-full p-4',
    wrap: 'flex items-center justify-center h-screen m-auto',
    content: 'flex items-start w-[560px]',
    logo: 'bg-npm-red rounded-3xl py-2 px-1 mr-8',
    textWrap: 'mt-4 ml-4',
    title: 'text-gray-800 text-4xl pb-4',
    subtitle: 'text-gray-700 text-xl pb-4',
    text: 'text-gray-600',
  };

  const router = useRouter();
  const goBack = () => router.back();

  const content = {
    title: 'Shift Scheduler',
    subtitle: 'Schedule shifts and manage timesheets for frontline workers',
    text: "This app will help you sign up for shifts, clock in and clock out when you're ready, request cover when you need it, and view your timesheet.",
  };

  return (
    <>
      <HeadMeta title="About" description="Page with short description of what this page about" />
      <main>
        <Button className={style.button} onClick={goBack}>
          <MdKeyboardBackspace size={45} />
        </Button>
        <div className={style.wrap}>
          <div className={style.content}>
            <div className={style.logo}>
              <NPM color="white" height="100px" width="150px" />
            </div>
            <div className={style.textWrap}>
              <h1 className={style.title}>{content.title}</h1>
              <h3 className={style.subtitle}>{content.subtitle}</h3>
              <p className={style.text}>{content.text}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
