import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    // image: {
    //   type: "string",
    // },
  },
  computedFields: {
    url_path: {
      type: "string",
      resolve: (doc) =>
        `blogs/${doc._raw.flattenedPath
          .replace(/pages\/?/, "")
          .replaceAll(" ", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
});
