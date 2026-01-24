import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

export default function MainNav() {
  return (
    <div className="hidden md:flex w-full justify-between">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={70} height={35} />
      </Link>
      <nav className="flex items-center justify-center space-x-6">
        <Link href="/" className="mx-4">
          Strona Główna
        </Link>
        <Link href="/o-nas" className="mx-4">
          O Nas
        </Link>
        <Link href="/treningi" className="mx-4">
          Treningi
        </Link>
        <Link href="/kontakt" className="mx-4">
          Kontakt
        </Link>
      </nav>
      <div className="flex justify-center items-center gap-3">
        <a
          href="https://www.facebook.com/profile.php?id=100095507017641"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/040basket/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </div>
    </div>
  );
}
