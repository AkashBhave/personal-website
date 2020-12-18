import { FiHome } from "@react-icons/all-files/fi/FiHome";

export default {
  name: "home",
  title: "Home",
  type: "document",
  icon: FiHome,
  fields: [
    {
      name: "phrases",
      title: "Phrases",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "skill" }],
    },
  ],
};
