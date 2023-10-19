import { notFound } from "next/navigation";
import Link from "next/link";

import { allBlogs, Blog } from "contentlayer/generated";
import BlogCard from "@/components/blog-card";
import { getAllTags } from "@/lib/utils";

type Props = { params: { tag: string } };

export async function generateStaticParams() {
  const allTags = getAllTags();
  return Array.from(allTags).map((tag) => ({ slug: tag }));
}

export async function generateMetadata({ params }: Props) {
  return {
    title: decodeURIComponent(params.tag),
  };
}

function Tag({ params }: Props) {
  const tagName = decodeURIComponent(params.tag);
  const blogsWithTag = allBlogs.filter(
    (blog: Blog) => blog.tags?.includes(tagName)
  );
  if (!blogsWithTag) {
    notFound();
  }

  return (
    <section className="my-10 sm:my-15">
      <h2 className="text-2xl md:text-3xl mb-6 font-medium">
        <span className="underline">{tagName}</span> Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-7 lg:gap-10 xl:gap-12">
        {blogsWithTag.map((blog: Blog) => (
          <Link key={blog.title} href={blog.url_path}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Tag;
