// Interfaces
import { IPost } from "@/interfaces/post";

// Services
import { getPostBySlug } from "@/services/post.service";

// Components
import { StrapiImage } from "@/components/strapi-image";

// 3rd party
import DOMPurify from "isomorphic-dompurify";

// Shadcn UI
import { ArrowLeft } from "lucide-react";
import { Calendar } from "lucide-react";
import { Tag } from "lucide-react";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await getPostBySlug(slug);

  const post: IPost = {
    slug: response.slug,
    title: response.title,
    date: new Date(response.createdAt).toLocaleDateString("pl-PL"),
    content: response.content,
    image: response.coverImage.url,
    excerpt: response.excerpt,
  };

  const safeHtml = DOMPurify.sanitize(post.content);

  return (
    <>
      <section className="container w-full mx-auto min-h-100">
        <div className="w-full px-2 mx-auto my-8 lg:w-3/4 lg:px-0">
          <a
            href="/aktualnosci"
            className="flex items-center gap-2 mb-4 text-sm"
          >
            <ArrowLeft />
            Powrót
          </a>
          <div className="flex items-center justify-start py-4 border-b border-gray-500">
            <Calendar className="mr-1" size={20} />
            <span className="text-sm">{post.date}</span>
            <Tag className="ml-4 mr-1" size={20} />
            <span className="text-sm"></span>
          </div>
          <div className="my-8">
            <h1 className="font-bold pb-4 text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p>{post.excerpt}</p>
          </div>
          <StrapiImage
            src={post.image}
            alt={post.title}
            width={1920}
            height={1080}
            className="w-full h-auto aspect-video object-cover mb-8"
          />
          <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
        </div>
      </section>
    </>
  );
}
