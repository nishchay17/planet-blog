import AllTags from "@/components/allTags";

export async function generateMetadata() {
  return {
    title: "Tags",
  };
}

function Blogs() {
  return <AllTags />;
}

export default Blogs;
