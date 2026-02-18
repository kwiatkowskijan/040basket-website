import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  return (
    <div className="md:hidden flex w-full justify-between items-center px-2">
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={70} height={35} />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-4">
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
        </SheetContent>
      </Sheet>
    </div>
  );
}
