import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="bg-neutral h-screen overflow-x-hidden">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div className="outside-container" />
      </body>
    </Html>
  );
}
