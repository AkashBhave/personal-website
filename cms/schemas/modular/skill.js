export default {
  name: "skill",
  title: "Skill",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(10),
    },
  ],
};
