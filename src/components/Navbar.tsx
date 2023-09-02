import React from 'react'
import Link from 'next/link'
import SignInButton from './SignInButton'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav';
import { ModeToggle } from './ThemeToggle';

type Props = {};

const Navbar = async (prpos: Props) => {

    const session = await getAuthSession();

    return (
    <nav className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2'>
        <div className='flex items-center h-full justify-center gap-2 px-8 mx-auto sm:justify-between max-w-7xl'>

            <Link href={'gallery/'} className='items-center gap-2 sm:flex transition-all hover:-translate-y-[2px] '>
                {/* Dark Image */}
                <img src="https://res.cloudinary.com/dejepmxba/image/upload/v1693689243/rectangle_dark_no-bg_4x_gcgcu8.png" 
                alt="phionira-logo"
                width={150}
                height={120}
                className='dark:hidden flex'
                />

                {/* Light Image */}
                <img src="https://res.cloudinary.com/dejepmxba/image/upload/v1693689243/rectangle_Light_no-bg_4x_m3woq4.png" 
                alt="phionira-logo"
                width={150}
                height={120}
                className='hidden md:hidden dark:flex'
                />
                
            </Link>

            <Link href={"/gallery"} className='items-center hidden gap-2 sm:flex'>
                {/* Display logo here */}
            </Link>
            <div className='flex items-center'>
                <Link href={'/gallery'} className='mr-3'>
                    Galería
                </Link>
                    {session?.user && (
                <>
                <Link href={"/create"} className='mr-3'>
                    Crear Curso
                </Link>
                <Link href={"/settings"} className='mr-3'>
                    Ajustes
                </Link>
                </>
                )}
                <ModeToggle className='mr-3'></ModeToggle>
                <div className='flex items-center'>
                    {session?.user ? <UserAccountNav user={session.user}></UserAccountNav> : <SignInButton></SignInButton> }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar