import Link from "next/link";

import BlogCard from "@/components/blog-card";
import { allBlogs, Blog } from "contentlayer/generated";

export default function Featured() {
  return (
    <section className="container my-10 sm:my-20">
      <h2 className="text-2xl md:text-3xl mb-6 font-medium">Featured Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-7 lg:gap-10 xl:gap-16">
        {allBlogs.map((blog: Blog) => (
          <Link key={blog.title} href={blog.url_path}>
            <BlogCard {...blog} />
          </Link>
        ))}
      </div>
    </section>
  );
}
