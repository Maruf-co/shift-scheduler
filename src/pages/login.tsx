import HeadMeta from '@/components/HeadMeta'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <HeadMeta />
      <main>
        <div className='m-10'>
            <Link href='/test'> Go to test page</Link>
        </div>
      </main>
    </>
  )
}
