'use client';

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="text-3xl flex justify-center items-center">
            <CiMenuFries className="text-[32p] text-accent"/>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col">
            <div className="mt-16 mb-40 text-center text-2xl font-bold">
                <Link href="/">
                    <h1 className="text-4xl font-bold">Eemil <span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col gap-8 items-center justify-center">
                {links.map((link, index) => {
                    return (
                        <Link href={link.href} key={index} className="text-2xl hover:text-accent transition-all">
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>

    </Sheet>
    };



export default MobileNav;
