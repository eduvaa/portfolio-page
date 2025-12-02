import  Link  from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full py-8 xl:py-12 15.577% 0.00635 285.608 / 0.849 dark:bg-gray-900">
        <div className="container mx-auto flex items-center justify-between no-underline">
                <div className="no-underline">
                <Link href="/" className="no-underline">
                    <h1 className="text-4xl font-bold no-underline">Eemil <span className="text-accent no-underline">.</span></h1>
                </Link>
                </div>

            {/* desktop navigation */}
                <div className="hidden xl:flex items-center gap-8 no-underline">
                    <Nav />
                    <Link href="/contact">
                        <Button className="ml-auto">
                            Contact Me
                        </Button>
                    </Link>
                </div>

                {/* mobile navigation */}
                <div className="flex xl:hidden no-underline">
                mobile nav
                <Link href="/contact">
                    <Button className="ml-auto">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    </header>
  );
}