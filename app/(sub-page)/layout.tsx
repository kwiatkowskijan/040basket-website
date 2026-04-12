import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header forceSolid />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
