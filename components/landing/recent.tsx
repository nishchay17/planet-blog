import Link from "next/link";
import { compareDesc, parseISO } from "date-fns";

import BlogCard from "@/components/blog-card";
import { allBlogs, Blog } from "contentlayer/generated";

export default function Recent() {
  const recentBlogs = allBlogs
    .sort((a, b) => compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)))
    .slice(0, 6);

  return (
    <section className="container my-10 sm:my-20">
      <h2 className="text-2xl md:text-3xl mb-6 font-medium">Recent Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-7 lg:gap-10 xl:gap-12">
        {recentBlogs.map((blog: Blog) => (
          <Link key={blog.title} href={blog.url_path}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </div>
    </section>
  );
}
