import { analytics } from "@/action/analytics";
import AllTags from "@/components/allTags";

export async function generateMetadata() {
  return {
    title: "Tags",
  };
}

function Blogs() {
  analytics("All Blogs", "All blog page visited");
  return <AllTags />;
}

export default Blogs;
