// Interfaces
import { IPost } from "@/interfaces/post";

// Services
import { getLastPost } from "@/services/post.service";

// Components
import Post from "@/components/features/post";

// Next
import Link from "next/link";

// Lucide
import { ArrowRight } from "lucide-react";

export default async function LastNewsSection() {
  const response = await getLastPost(3);

  const posts: IPost[] = response.map((post: any) => ({
    slug: post.slug,
    title: post.title,
    date: new Date(post.createdAt).toLocaleDateString("pl-PL"),
    content: post.content,
    image: post.coverImage.url,
    excerpt: post.excerpt,
  }));

  return (
    <section className="w-full container mx-auto min-h-100 py-16">
      <div className="flex items-end justify-between px-2 lg:px-0 mb-8">
        <div className="flex flex-col justify-flex-start gap-8">
          <p className="uppercase font-bold tracking-widest text-primary">
            Newsy
          </p>
          <h2 className="text-2xl md:text-5xl text-center uppercase">
            Najnowsze aktualności
          </h2>
        </div>
        <Link
          href="/aktualnosci"
          className="text-sm font-medium flex items-center gap-2"
        >
          Zobacz wszystkie
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-0 gap-8">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
