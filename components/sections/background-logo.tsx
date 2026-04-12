import Image from "next/image";

export default function BackgroundLogo() {
  return (
    <Image
      src="/bg-logo.png"
      alt="Kontakt"
      width={1920}
      height={1080}
      sizes="100vw"
      className="absolute inset-x-0 top-0 -z-10 mx-auto h-auto w-full max-h-dvh object-contain"
    />
  );
}
