import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import NPM from '../../public/NPM';
import Button from './Button';

const Instructions: React.FC = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const style = {
    wrap: 'flex items-center justify-center h-screen m-auto',
    content: 'flex flex-col items-center w-[600px]',
    logo: 'bg-npm-red rounded-3xl py-2 px-1',
    textBox: 'flex flex-col items-start',
    title: 'text-gray-700 text-3xl mt-16',
    text: 'text-gray-600 text-xl mt-4',

    fixedButton: 'fixed bottom-20 text-xl rounded-md px-8',
    back: 'text-npm-red border-npm-red border-2 py-2',
    backPassive: 'text-gray-300 border-gray-300 border-2 py-2',
    next: 'text-white bg-npm-red shadow-md py-2.5',
    nextPassive: 'text-black bg-gray-300 shadow-md py-2.5',
  };

  const logo = (
    <div className={style.logo}>
      <NPM color="white" height="200px" width="300px" />
    </div>
  );

  const getImg = (src: string) => {
    return <Image src={src} alt="Shift Scheduler Slide" width={440} height={220} />;
  };

  const content = [
    {
      img: logo,
      title: `NPM Enjoyers' Shift Scheduler`,
      text: "This app will help you sign up for shifts, clock in & clock out when you're ready, request cover when you need it, and view your timesheet",
    },
    {
      img: getImg('https://i.ibb.co/yqt95TJ/Sign-Up-for-Shifts.jpg'),
      title: 'Sign Up for Shifts',
      text: 'Click the calendar with the plus sign to sign up for a shift. And don’t worry, I’ll always ask you to confirm before you take any action!',
    },
    {
      img: getImg('https://i.ibb.co/qjnQ8bt/Clock-in.jpg'),
      title: 'Clock-In',
      text: 'To clock in for your shift, simply click on the three dots on the “My Shifts” page to open a menu at the bottom. There you can select “Clock In” to begin your shift.',
    },
    {
      img: getImg('https://i.ibb.co/rsKbK1R/Clock-out.jpg'),
      title: 'Clock-Out',
      text: 'When your shift is over, click on menu in the top right hand corner and select “Clocked In.” Then select the arrow and you’ll be clocked out. It’s that easy!s',
    },
    {
      img: getImg('https://i.ibb.co/r3X0vVj/Requesting-Cover.jpg'),
      title: 'Requesting Cover',
      text: 'To request a cover for your shift, click on the three dots on the “My Shifts” page to open a menu at the bottom. Then select “Request Cover.” All staff requests can be viewed on the “Cover Requests” page',
    },
    {
      img: getImg('https://i.ibb.co/pR3sdjz/Accepting-Cover-Requests.jpg'),
      title: 'Accepting Cover Requests',
      text: 'To accept a cover request, select the "Cover Request" tab at the bottom of the app. There you can select any listed shift and click "Swap Shifts" to complete the action.',
    },
  ];

  const handleNext = () => slideNumber != content.length - 1 && setSlideNumber(slideNumber + 1);
  const handlePrev = () => slideNumber != 0 && setSlideNumber(slideNumber - 1);

  return (
    <>
      <div className={style.wrap}>
        <div className={style.content}>
          {content[slideNumber].img}
          <div className={style.textBox}>
            <h3 className={style.title}>{content[slideNumber].title}</h3>
            <h5 className={style.text}>{content[slideNumber].text}</h5>
          </div>
        </div>
      </div>
      <Button
        onClick={handlePrev}
        className={cn(
          style.fixedButton,
          'left-32',
          slideNumber === 0 ? style.backPassive : style.back
        )}
      >
        BACK
      </Button>
      <Button
        onClick={handleNext}
        className={cn(
          style.fixedButton,
          'right-32',
          slideNumber === content.length - 1 ? style.nextPassive : style.next
        )}
      >
        NEXT
      </Button>
    </>
  );
};

export default Instructions;
