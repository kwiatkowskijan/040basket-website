interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <section className="w-full container mx-auto flex justify-center items-center text-center text-primary min-h-100 uppercase">
      <h1 className="text-6xl lg:text-8xl">{title}</h1>
    </section>
  );
}
