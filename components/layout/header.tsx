"use client";

import MainNav from "../navigation/main-nav";
import MobileNav from "../navigation/mobile-nav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NavbarProps = {
  forceSolid?: boolean;
};

export default function Header({ forceSolid }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (forceSolid) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceSolid]);

  const isSolid = forceSolid || scrolled;

  return (
    <header
      className={cn(
        "top-0 left-0 w-full z-50 transition-all duration-300",
        isSolid ? "sticky bg-primary" : "fixed bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center">
        {/* Main Navigation */}
        <MainNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
