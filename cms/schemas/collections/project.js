import { FiTool } from "@react-icons/all-files/fi/FiTool";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: FiTool,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "iconLink" }],
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
