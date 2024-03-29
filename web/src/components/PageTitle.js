import React from "react";

const PageTitle = (props) => (
  <div
    className="w-full bg-blue-secondary text-light px-8 py-12 text-center shadow"
    id="title"
  >
    <h1 className="text-uppercase text-4xl font-bold" title="Title">
      {props.title}
    </h1>
    <p className="text-uppercase text-xl font-normal" title="Subtitle">
      {props.subtitle}
    </p>
  </div>
);

export default PageTitle;
