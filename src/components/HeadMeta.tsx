import React from 'react'
import Head from "next/head";

export interface IHeadMeta {
  title?: string;
  description?: string; 
}

const HeadMeta: React.FC = ({
    title = 'Shift scheduler',
    description = 'Shift scheduler app to manage schedules of employers',

}: IHeadMeta) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
