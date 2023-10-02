import { allBlogs } from "@/.contentlayer/generated";

type Props = { params: { slug: string } };

function Blog({ params }: Props) {
  const blog = allBlogs.find(
    (blog) => blog.url_path === `blogs/${params.slug}`
  );
  return (
    <article>
      <h1 className="text-2xl my-14 font-medium text-center">{blog?.title}</h1>
    </article>
  );
}

export default Blog;
