import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    createdAt: {
      type: "date",
      required: true,
    },
    image: { type: "string" },
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) =>
        `/blogs/${doc._raw.flattenedPath
          .replace(/pages\/?/, "")
          .replaceAll(" ", "")}`,
    },
  },
}));

const codeOptions = {
  theme: "github-dark",
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, codeOptions],
    ],
  },
});
