import React from "react";
import PropTypes from "prop-types";
import Highlight from "react-highlight";

import SanityBlockContent from "@sanity/block-content-to-react";
import { sanityImage } from "~utils/sanity";

export const BlockContentCode = ({ node }) => (
  <div className="my-8">
    <Highlight className={node.language || ""}>
      <p className="text-dark relative hljs-language bg-light font-light px-2 py-1 uppercase border-2 border-blue-primary font-sans">
        {node.language || "unknown"}
      </p>
      <code className={node.language || ""}>{node.code.code}</code>
    </Highlight>
  </div>
);

const BlockContentEmbed = ({ node }) => (
  <iframe src={node.url} className="py-3 w-full" height="600" />
);

const BlockContentImage = ({ node }) => (
  <div className="mb-6">
    <img
      src={sanityImage(node.image.asset)
        .width(1500)
        .url()}
    />
    <p className="text-center opacity-75 italic" style={{ marginTop: "-10px" }}>
      {node.caption}
    </p>
  </div>
);

BlockContentCode.propTypes = {
  code: PropTypes.object,
  language: PropTypes.string
};

const BlockContent = ({ body }) => (
  <SanityBlockContent
    blocks={body || []}
    serializers={{
      types: {
        codeBlock: BlockContentCode,
        embed: BlockContentEmbed,
        captionedImage: BlockContentImage
      }
    }}
    projectId={process.env.GATSBY_SANITY_ID}
    dataset={process.env.GATSBY_SANITY_DATASET}
  />
);

export default BlockContent;
