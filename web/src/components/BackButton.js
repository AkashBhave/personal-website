import React from "react";
import { Link } from "gatsby";

const BackButton = (props) => (
  <Link to={props.to}>
    <div className="flex-1 w-full font-bold text-uppercase py-4 text-xl link-bg bg-blue-secondary">
      <i className="fas fa-arrow-left mr-2"></i>
      <span>{props.title}</span>
    </div>
  </Link>
);

export default BackButton;
