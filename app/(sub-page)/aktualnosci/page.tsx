// Next.js
import { Metadata } from "next";
import Image from "next/image";

// Interfaces
import { Post } from "@/interfaces/post";

// Services
import { getPosts } from "@/services/post.service";

// Components
import PageTitle from "@/components/sections/page-title";
import BackgroundLogo from "@/components/sections/background-logo";
import { StrapiImage } from "@/components/strapi-image";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aktualności",
};

export default async function News() {
  const response = await getPosts();
  const posts: Post[] = response.map((post: any) => ({
    slug: post.slug,
    title: post.title,
    date: new Date(post.createdAt).toLocaleDateString("pl-PL"),
    content: post.content,
    image: post.coverImage.url,
  }));

  return (
    <main>
      <BackgroundLogo />
      <PageTitle />
      <section className="w-full container mx-auto min-h-100">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-0 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="w-full p-4 bg-primary flex flex-col items-start justify-start gap-4"
            >
              <StrapiImage
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
              <h3 className="text-3xl font-bold text-background">
                {post.title}
              </h3>
              <p className="text-background line-clamp-3 min-h-18">
                {post.content}
              </p>
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-background">{post.date} </span>
                <a href={`/aktualnosci/${post.slug}`}>
                  <Button variant={"secondary"} size={"sm"}>
                    Czytaj <ArrowRight className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
