import React from "react";
import { Link, graphql } from "gatsby";

import BlockContent from "@sanity/block-content-to-react";
import BlockContentCode from "~components/BlockContentCode";
import SEO from "~utils/seo";
import Layout from "~layouts/informational";
import PostTypeBadge from "~components/PostTypeBadge";
import BackButton from "~components/BackButton";

const Post = ({ data: { post } }) => {
  return (
    <Layout
      seo={<SEO title={`${post.title} | Blog`} keywords={[`blog`, `post`]} />}
      info={
        <>
          <BackButton to="/blog" title="Blog" />
          <div className="flex flex-1 flex-col py-12 px-8 justify-center h-full">
            <div className="w-auto mx-auto text-xl">
              <PostTypeBadge showProject={true} {...post.postType} />
            </div>
            <h1 className="md:text-5xl text-4xl font-serif font-bold -mb-2 mt-6">
              {post.title}
            </h1>
            <h3 className="text-xl mt-4">
              By
              <span className="italic text-blue-tertiary ml-1">
                Akash Bhave
              </span>
            </h3>
            <h3 className="text-base mt-2">
              Published on
              <span className="font-mono text-blue-tertiary ml-1">
                {new Date(post.publishedAt).toLocaleDateString(
                  {},
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </span>
            </h3>
            <div className="mt-6">
              {post.keywords.map((keyword) => (
                <span className="inline-block mb-2 mx-2 p-2 font-light text-light bg-blue-secondary rounded">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </>
      }
      mainImage={post.mainImage}
    >
      <BlockContent
        blocks={post._rawBody || []}
        serializers={{
          types: { codeBlock: BlockContentCode },
        }}
        projectId={process.env.GATSBY_SANITY_ID}
        dataset={process.env.GATSBY_SANITY_DATASET}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($id: String) {
    post: sanityPost(_id: { eq: $id }) {
      title
      publishedAt
      slug {
        current
      }
      postType {
        type
        project {
          title
          slug {
            current
          }
        }
      }
      _rawBody
      keywords
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default Post;
