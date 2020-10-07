import React from "react";
import { graphql } from "gatsby";

import Layout from "~layouts/default";
import SEO from "~utils/seo";
import PageTitle from "~components/PageTitle";
import CardGrid from "~components/CardGrid";

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" keywords={[`projects`, `articles`]} />

    <PageTitle title="Projects" subtitle="What I've been up to recently" />
    <section className="container mx-auto px-8 py-12">
      <div className="flex flex-row flex-wrap justify-start -mx-4">
        <CardGrid
          isProject={true}
          showProject={false}
          items={data.projects.nodes}
        />
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query ProjectPageQuery {
    projects: allSanityProject(sort: { fields: _updatedAt, order: DESC }) {
      nodes {
        updatedAt: _updatedAt
        keywords
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        description: _rawDescription
        title
        slug {
          current
        }
      }
    }
  }
`;

export default ProjectPage;
