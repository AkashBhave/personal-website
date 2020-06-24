export default {
  name: "codeBlock",
  title: "Code Block",
  type: "object",
  fields: [
    {
      name: "code",
      title: "Code",
      type: "code",
      options: { theme: "tomorrow" },
    },
    {
      name: "language",
      type: "string",
      title: "Language",
    },
  ],
};
