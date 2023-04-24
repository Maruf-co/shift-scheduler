import HeadMeta from '@/components/HeadMeta';
import Navbar from '@/components/Navbar';

export default function Instructions() {
  return (
    <>
      <HeadMeta
        title="Instructions"
        description="Page with instructions on how to manage this web-app"
      />
      <main>
        <div className="text-2xl flex items-center justify-center h-screen">
          <h1>Instructions</h1>
        </div>
      </main>
    </>
  );
}
