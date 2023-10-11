import { notFound } from "next/navigation";
import Link from "next/link";

import { Mdx } from "@/components/render-mdx";
import { allBlogs, Blog } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Links } from "@/config/links";

type Props = { params: { slug: string } };

function Blog({ params }: Props) {
  const blog = allBlogs.find(
    (blog: Blog) => blog.url_path === `/blogs/${params.slug}`
  );
  if (!blog) {
    notFound();
  }
  const isTagsPresent: boolean =
    (blog.tags && Array.isArray(blog.tags)) ?? false;

  return (
    <article className="max-w-3xl mx-auto">
      <div className="my-14">
        <h1 className={`text-2xl font-medium ${isTagsPresent ? "mb-4" : ""}`}>
          {blog.title}
        </h1>
        <div className="flex gap-x-3 gap-y-2 mx-auto flex-wrap">
          {isTagsPresent &&
            blog?.tags?.map((tag: string) => (
              <Link key={tag} href={`/tags/${tag}`} prefetch>
                <span className="border text-xs md:text-sm rounded-lg px-3 py-[2px] cursor-pointer">
                  {tag}
                </span>
              </Link>
            ))}
        </div>
      </div>
      <Mdx code={blog.body.code} />
      <div className="mt-7 pt-7 pb-8 border-t">
        <Link href={Links.landing.href}>
          <Button>
            Go back <Icons.arrowLeft className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </article>
  );
}

export default Blog;
