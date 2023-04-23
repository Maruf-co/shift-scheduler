import Link from 'next/link'
import HeadMeta from '@/components/HeadMeta'
import Navbar from '@/components/Navbar'
import Button from '@/components/Button'

export default function Test() {
  return (
    <>
      <HeadMeta />
      <main>
        <Navbar />
        <div className='flex double flex flex-col items-center space-y-10 m-10'>
          <h1 className='text-amber-900'>Test page</h1>

          <Button className='bg-cyan-400 rounded-xl text-white'>Test button </Button>

          <Link href='/'>Go Home</Link>

        </div>

      </main>
    </>
  )
}
