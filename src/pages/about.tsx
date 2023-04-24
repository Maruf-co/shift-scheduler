import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <HeadMeta title="About" description="Page with short description of what this page about" />
      <main>
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>About</h1>
        </div>
      </main>
    </>
  );
}
