// Next.js
import { Metadata } from "next";
import Image from "next/image";

// Components
import PageTitle from "@/components/sections/page-title";
import BackgroundLogo from "@/components/sections/background-logo";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aktualności",
};

interface Post {
  title: string;
  image: string;
  date: string;
  link: string;
}

export default function News() {
  const posts: Post[] = [
    {
      title: "Nowy sezon już za rogiem!",
      image: "/markus-spiske-mXlOuM4unSg-unsplash.jpg",
      date: "01/01/2025",
      link: "#",
    },
    {
      title: "Zmiany w regulaminie",
      image: "/markus-spiske-mXlOuM4unSg-unsplash.jpg",
      date: "02/01/2025",
      link: "#",
    },
    {
      title: "Nowe zasady rozgrywek",
      image: "/markus-spiske-mXlOuM4unSg-unsplash.jpg",
      date: "03/01/2025",
      link: "#",
    },
  ];
  return (
    <main>
      <BackgroundLogo />
      <PageTitle />
      <section className="w-full container mx-auto min-h-100">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div className="w-full p-4 bg-primary flex flex-col items-start justify-center gap-4">
              <Image
                src={post.image}
                alt="News Image"
                width={500}
                height={300}
              />
              <h3 className="text-3xl font-bold text-background">
                {post.title}
              </h3>
              <div className="flex items-center justify-between w-full">
                <Button variant={"secondary"} size={"sm"}>
                  Czytaj <ArrowRight className="ml-2" />
                </Button>
                <span className="text-sm text-background">{post.date} </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
