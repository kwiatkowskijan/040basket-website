// Interfaces
import { IPost } from "@/interfaces/post";

// Components
import { StrapiImage } from "@/components/strapi-image";
import { Button } from "../ui/button";

// Lucide
import { ArrowUpRight, Calendar } from "lucide-react";

export default function Post({ post }: { post: IPost }) {
  return (
    <article className="group relative bg-card border-2 border-primary shadow-[3px_3px_0px_var(--primary)] transition-snap hover:shadow-[5px_5px_0px_var(--primary)]">
      {/* Image */}
      <div className="relative overflow-hidden border-b-2 border-foreground">
        <StrapiImage
          src={post.image}
          alt={post.title}
          width={1024}
          height={768}
          className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <h2 className="font-display text-2xl leading-none text-black uppercase">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t-2 border-foreground">
          <span className="flex items-center gap-1.5 text-xs">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <a
            href={`/aktualnosci/${post.slug}`}
            aria-label={`Czytaj więcej: ${post.title}`}
            className="group/btn flex items-center gap-2 bg-primary px-4 py-2 text-primary-foreground transition-snap"
          >
            <span className="font-display text-sm tracking-wider">Czytaj</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:rotate-45" />
          </a>
        </div>
      </div>
    </article>
  );
}
