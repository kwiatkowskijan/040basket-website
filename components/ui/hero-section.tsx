export default function HeroSection() {
  return (
    <div className="w-full h-dvh relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/040_v2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4 font-heading">
          Stowarzyszenie 040Basket
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 max-w-2xl">
          Still ballin!
        </p>
        <a
          href="/kontakt"
          className="bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition"
        >
          Dołącz do nas!
        </a>
      </div>
    </div>
  );
}
