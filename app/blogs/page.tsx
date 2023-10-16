import { analytics } from "@/action/analytics";
import AllBlogs from "@/components/allBlogs";

export async function generateMetadata() {
  return {
    title: "All Blogs",
  };
}

function Blogs() {
  analytics("All Blogs", "All blog page visited");
  return <AllBlogs />;
}

export default Blogs;
