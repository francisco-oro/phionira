import React from 'react'
import Link from 'next/link'
import SignInButton from './SignInButton'
import { getAuthSession } from '@/lib/auth'

type Props = {};

const Navbar = async (props: Props) => {
    const session = await getAuthSession(); 
    console.log(session);
  return (
    <nav className='fixed inset-x-0 top-o bg-white darK:bg-gray:950 z-[10] h-fit border-b border-zinc-300 py-2'>
        <div className='flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl'>
            <Link href={"/gallery"} className='items-center hidden gap-2 sm:flex'>
                <p className='rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white'>
                    Phionira
                </p>
            </Link>
            <div className='flex items-center'>
                <Link href={"/create"} className='mr-3'>
                    Crear Curso
                </Link>
                <Link href={"/settings"} className='mr-3'>
                    Ajustes
                </Link>
                <SignInButton></SignInButton>
            </div>
        </div>
    </nav>
  )
}

export default Navbar