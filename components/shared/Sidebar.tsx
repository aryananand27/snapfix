'use client'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut,UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Sidebar = () => {
    const pathname=usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex flex-col size-full gap-4'>
            <Link href='/' className='sidebar-logo'>
                <Image src='/assets/images/logo2.png' alt='logo' width={150} height={28}/>
            </Link>
            <nav className='sidebar-nav'>
              <SignedIn>
                    <ul className='sidebar-nav_elements'>
                        {navLinks.slice(0,6).map((link)=>{
                            const isActive=link.route===pathname;
                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive? 'bg-purple-gradient text-white':'text-gray-700'}`}>
                                    <Link href={link.route} className='sidebar-link'>
                                        <Image src={link.icon} alt='Icon'width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <ul className='sidebar-nav_elements'>
                    {navLinks.slice(6).map((link)=>{
                            const isActive=link.route===pathname;
                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive? 'bg-purple-gradient text-white':'text-gray-700'}`}>
                                    <Link href={link.route} className='sidebar-link'>
                                        <Image src={link.icon} alt='Icon'width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="flex-center cursor-pointer gap-2 p-2">
                            <UserButton  showName />
                        </li>
                    </ul>
                    </SignedIn>
                <SignedOut>
                    <Button asChild className='bg-purple-gradient bg-cover button'>
                        <Link href='/sign-in'>
                           SignIn
                        </Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
      
    </aside>
  )
}

export default Sidebar
