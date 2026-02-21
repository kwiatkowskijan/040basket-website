// Next.js
import { Metadata } from "next";

// Interfaces
import { IPost } from "@/interfaces/post";

// Services
import { getPosts } from "@/services/post.service";

// Components
import PageTitle from "@/components/sections/page-title";
import BackgroundLogo from "@/components/sections/background-logo";
import Post from "@/components/features/post";

export const metadata: Metadata = {
  title: "Aktualności",
};

export default async function Posts() {
  const response = await getPosts();
  const posts: IPost[] = response.map((post: any) => ({
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
            <Post key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
