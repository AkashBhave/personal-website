import { HiOutlineDocument } from "@react-icons/all-files/hi/HiOutlineDocument";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: HiOutlineDocument,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Project", value: "project" },
          { title: "Thought", value: "thought" },
          { title: "Tutorial", value: "tutorial" },
        ],
        layout: "radio",
      },
    },
    {
      title: "Project",
      name: "project",
      type: "reference",
      to: [{ type: "project" }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      project: "postType.project.title",
      type: "postType.type",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, project, type, media } = selection;
      return {
        title: title,
        // Show the post type and the project name if there is one
        subtitle:
          (type
            ? type.replace(/[a-z]/i, function (letter) {
                return letter.toUpperCase();
              })
            : "") + (project ? " / " + project : ""),
        media: media,
      };
    },
  },
};
