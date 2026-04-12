import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
