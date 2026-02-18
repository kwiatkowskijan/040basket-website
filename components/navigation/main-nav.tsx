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
      <nav className="flex items-center justify-center space-x-6 uppercase">
        <Link
          href="/"
          className="mx-4 font-heading text-2xl text-primary-foreground hover:opacity-80"
        >
          Strona Główna
        </Link>
        <Link
          href="/aktualnosci"
          className="mx-4 font-heading text-2xl text-primary-foreground hover:opacity-80"
        >
          Aktualności
        </Link>
        <Link
          href="/o-nas"
          className="mx-4 font-heading text-2xl text-primary-foreground hover:opacity-80"
        >
          O Nas
        </Link>
        <Link
          href="/turnieje-3x3"
          className="mx-4 font-heading text-2xl text-primary-foreground hover:opacity-80"
        >
          Turnieje 3x3
        </Link>
        <Link
          href="/treningi"
          className="mx-4 font-heading text-2xl text-primary-foreground hover:opacity-80"
        >
          Treningi
        </Link>
        <Link
          href="/kontakt"
          className="mx-4 font-heading text-2xl text-primary-foreground hover:opacity-80"
        >
          Kontakt
        </Link>
      </nav>
      <div className="flex justify-center items-center gap-3">
        <a
          href="https://www.facebook.com/profile.php?id=100095507017641"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/040basket/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-foreground"
        >
          <Instagram />
        </a>
      </div>
    </div>
  );
}
