import Link from "next/link";

import { allBlogs } from "contentlayer/generated";

export default function AllTags() {
  const allTags = allBlogs.reduce((tagSet, currentBlog) => {
    (currentBlog?.tags ?? []).forEach((tag) => tagSet.add(tag));
    return tagSet;
  }, new Set<string>());
  return (
    <section>
      <h2 className="text-2xl md:text-3xl mb-6 font-medium">All Tags</h2>
      <div className="flex gap-x-3 gap-y-2 mx-auto flex-wrap">
        {Array.from(allTags).map((tag) => (
          <Link key={tag} href={`/tags/${tag}`} prefetch>
            <span className="border text-lg rounded-lg px-3 py-[2px] cursor-pointer">
              {tag}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
