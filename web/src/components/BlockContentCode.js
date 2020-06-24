import React from "react";
import PropTypes from "prop-types";

import Highlight from "react-highlight";

const BlockContentCode = ({ node }) => (
  <div className="my-8">
    <Highlight className={node.language || ""}>
      <p className="text-dark relative hljs-language bg-light font-light px-2 py-1 uppercase border-2 border-blue-primary font-sans">
        {node.language || "unknown"}
      </p>
      <code classname={node.language || ""}>{node.code.code}</code>
    </Highlight>
  </div>
);

BlockContentCode.propTypes = {
  code: PropTypes.object,
  language: PropTypes.string,
};

export default BlockContentCode;
