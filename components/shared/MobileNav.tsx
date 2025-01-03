"use client";
import {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet";
import { SignedIn, UserButton,SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
    const pathname=usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo2.png"
          alt="Logo"
          width={152}
          height={23}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
        <UserButton />
          <Sheet>
            <SheetTrigger>
                <Image src='/assets/icons/menu.svg' alt="menu" width={28} height={28}  className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-74">
                <>
                    <Image src='/assets/images/logo2.png' alt="logo" width={152} height={23}/>
                    <ul className='header-nav_elements'>
                        {navLinks.map((link)=>{
                            const isActive=link.route===pathname;
                            return (
                                <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                    <Link href={link.route} className='sidebar-link cursor-pointer'>
                                        <Image src={link.icon} alt='Icon'width={24} height={24}/>
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </>
             
            </SheetContent>
          </Sheet>

          
        </SignedIn>
          <SignedOut>
                    <Button asChild className='bg-purple-gradient bg-cover button'>
                        <Link href='/sign-in'>
                           SignIn
                        </Link>
                    </Button>
                </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
