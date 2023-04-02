import Link from 'next/link'
import HeadMeta from '@/components/HeadMeta'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar />
        <div className='m-10'>
            <Link href='/test'> Go to test page</Link>
        </div>
      </main>
    </>
  )
}
