import { ModeToggle } from "./themebtn";
import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link className="flex items-center" href="/">
        <Image
          src="/nemo.png"
          alt="Logo NEMO"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span className="ml-2 text-lg font-bold">NEMO</span>
      </Link>
      <nav className="flex gap-4 sm:gap-6 flex-1 justify-end items-center">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/vizualizace"
        >
          Vizualizace
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
