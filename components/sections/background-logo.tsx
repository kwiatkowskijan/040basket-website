import Image from "next/image";

export default function BackgroundLogo() {
  return (
    <Image
      src="/bg-logo.png"
      alt="Kontakt"
      width={1920}
      height={1080}
      className="w-full absolute -z-10"
    />
  );
}
