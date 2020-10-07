import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import BlockContent from "@sanity/block-content-to-react";
import CardGrid from "~components/CardGrid";
import Layout from "~layouts/default";
import SEO from "~utils/seo";
import PageTitle from "~components/PageTitle";

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `articles`]} />

    <PageTitle title="Blog" subtitle="Fresh off the CMS" />
    <section className="container mx-auto px-8 py-12">
      <CardGrid
        isProject={false}
        showProject={false}
        items={data.posts.nodes}
      />
    </section>
  </Layout>
);

export const queryFragment = graphql`
  fragment Posts on SanityPostConnection {
    nodes {
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
      keywords
      mainImage {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      ...Posts
    }
  }
`;

export default BlogPage;
