// Interfaces
import { IPost } from "@/interfaces/post";

// Components
import { StrapiImage } from "@/components/strapi-image";

// Shadcn UI
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Post({ post }: { post: IPost }) {
  return (
    <div className="w-full p-4 bg-primary flex flex-col items-start justify-start gap-4">
      <StrapiImage
        src={post.image}
        alt={post.title}
        width={600}
        height={400}
        className="w-full max-h-64 object-cover"
      />
      <h3 className="text-3xl font-bold text-background">{post.title}</h3>
      <p className="text-background line-clamp-3 min-h-18">{post.excerpt}</p>
      <div className="flex items-center justify-between w-full">
        <span className="text-sm text-background">{post.date} </span>
        <a href={`/aktualnosci/${post.slug}`}>
          <Button variant={"secondary"} size={"sm"}>
            Czytaj <ArrowRight className="ml-2" />
          </Button>
        </a>
      </div>
    </div>
  );
}
