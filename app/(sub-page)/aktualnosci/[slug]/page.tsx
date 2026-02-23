// Interfaces
import { IPost } from "@/interfaces/post";

// Services
import { getPostBySlug } from "@/services/post.service";

// Components
import { StrapiImage } from "@/components/strapi-image";

// 3rd party
import DOMPurify from "isomorphic-dompurify";

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
  };

  // Sanitize content to prevent XSS attacks
  const safeHtml = DOMPurify.sanitize(post.content);

  return (
    <main>
      <section className="w-full container mx-auto min-h-100">
        <StrapiImage
          src={post.image}
          alt={post.title}
          width={1920}
          height={1080}
          className="w-full h-auto mb-8 aspect-video object-cover"
        />
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
      </section>
    </main>
  );
}
