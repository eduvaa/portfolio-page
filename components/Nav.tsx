'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  
  return (
    <nav className="flex gap-8 no-underline">
         {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={link.href === pathname ? "text-accent border-b-2 border-accent" : ""}
            >
              {link.name}
            </Link>
         ))}       
    </nav>
    )
}