import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Nav() {
  return (
    <nav className="flex gap-8 no-underline">
         {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="capitalize font-medium no-underline hover:text-accent transition-all"
            >
              {link.name}
            </Link>
         ))}       
    </nav>
    )
}