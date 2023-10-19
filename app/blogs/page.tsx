import AllBlogs from "@/components/allBlogs";

export async function generateMetadata() {
  return {
    title: "All Blogs",
  };
}

function Blogs() {
  return <AllBlogs />;
}

export default Blogs;
