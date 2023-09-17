export default {
  name: "captionedImage",
  title: "Captioned image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
};
