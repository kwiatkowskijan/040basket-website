import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-49">
      <div className="container mx-auto flex items-center">
        {/* Main Navigation */}
        <MainNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
