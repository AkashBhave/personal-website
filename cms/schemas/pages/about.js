export default {
  name: "page-about",
  title: "Page (About)",
  type: "document",
  fields: [
    {
      title: "Main Image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Description",
      name: "description",
      type: "blockContent",
    },
    {
      title: "GPG Info",
      name: "gpg",
      type: "page-about-gpg",
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Page (About)",
        subtitle: "Page",
      };
    },
  },
};
