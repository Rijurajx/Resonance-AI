import Link from 'next/link'
import Image from "next/image";
import React, { ReactNode } from 'react'
import { isAuthinticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthinticated();
  if (!isUserAuthenticated) redirect('/sign-in');
  
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo1.png" alt="logo" width={38} height={32} />
          <h2 className='text-primary-100'>Resonance AI</h2>
        </Link>
      </nav>
      {children}
      </div>
  )
}

export default RootLayout