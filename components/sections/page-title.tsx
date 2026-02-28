"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";

interface PageTitleProps {
  description?: string;
}

export default function PageTitle({ description }: PageTitleProps) {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean).pop();

  if (!segment) {
    return;
  }

  const title = segment.charAt(0).toUpperCase() + segment.slice(1);

  return (
    <section className="w-full container mx-auto flex flex-col justify-center items-center text-center text-primary min-h-50  lg:min-h-100 uppercase">
      <h1 className="text-6xl lg:text-8xl">{title}</h1>
      <Breadcrumbs routes={[title]} />
    </section>
  );
}
