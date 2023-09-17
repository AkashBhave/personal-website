export default {
  name: "codeBlock",
  title: "Code block",
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
