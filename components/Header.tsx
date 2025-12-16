import  Link  from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


export default function Header() {
  return (
    <header className="site-header w-full py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
          <div>
          <Link href="/">
            <h1 className="text-4xl font-bold">Eemil <span className="text-accent">.</span></h1>
          </Link>
          </div>

            {/* desktop navigation */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Button asChild className="ml-auto">
                      <Link href="/contact">Contact Me</Link>
                    </Button>
                </div>

                {/* mobile navigation */}
                <div className="flex xl:hidden">
                < MobileNav />
            </div>
        </div>
    </header>
  );
}