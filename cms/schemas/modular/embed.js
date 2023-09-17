import React from "react";

export default {
  title: "Embed",
  name: "embed",
  type: "object",
  fields: [
    {
      title: "URL",
      name: "url",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: ({ value }) => (
      <iframe src={value.url} width="100%" height="500px" frameBorder={0} />
    ),
  },
};
