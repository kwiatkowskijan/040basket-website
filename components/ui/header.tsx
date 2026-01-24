import Link from "next/link";
import Image from "next/image";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-49">
      <div className="container mx-auto flex items-center text-white">
        {/* Main Navigation */}
        <MainNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
