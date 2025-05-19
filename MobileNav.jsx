"use client";

import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'work',
        path: '/work'
    },
    {
        name: 'contact',
        path: '/contact'
    },
]
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className='text-[32px] text-emerald-400' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className='mt-32 mb-40 text-center text-2xl'>
                    <Link href="/">
                        <h1 className='text-white font-semibold'>
                            Luke<span className='text-emerald-400'>.</span>
                        </h1>
                    </Link>
                </div>
                <nav className='flex flex-col items-center justify-center gap-8'>
                    {links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${link.path === pathname && "text-emerald-400 border-b-2 border-emerald-400"} text-xl text-white capitalize hover:text-emerald-400 transition-all`}>
                            {link.name}
                        </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav