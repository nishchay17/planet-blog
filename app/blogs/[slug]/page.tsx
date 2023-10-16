import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Mdx } from "@/components/render-mdx";
import { allBlogs, Blog } from "contentlayer/generated";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Links } from "@/config/links";
import { siteConfig } from "@/config/site";
import { analytics } from "@/action/analytics";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }: Props) {
  const blog = allBlogs.find(
    (blog) => blog.url_path === `/blogs/${params.slug}`
  );
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.createdAt).toISOString();

  // if (blog.image) {
  //   imageList =
  //     typeof blog.image.filePath === "string"
  //       ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
  //       : blog.image;
  // }
  // const ogImages = imageList.map((img) => {
  //   return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  // });

  return {
    title: blog.title,
    openGraph: {
      title: `${siteConfig.name} | ${blog.title}`,
      url: siteConfig.siteUrl + blog.url_path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      // images: ogImages,
      authors: siteConfig.authors,
    },
  };
}

function Blog({ params }: Props) {
  const blog = allBlogs.find(
    (blog: Blog) => blog.url_path === `/blogs/${params.slug}`
  );
  if (!blog) {
    notFound();
  }
  const isTagsPresent: boolean =
    (blog.tags && Array.isArray(blog.tags)) ?? false;

  analytics(`Blogs: ${blog.title}`, `${blog.title} blog page visited`);

  return (
    <article className="max-w-3xl mx-auto">
      <div className="my-14">
        <div className="relative w-full h-48 mb-5">
          <Image
            src={blog.image ?? "/svg/blank.svg"}
            alt="blog image"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
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
