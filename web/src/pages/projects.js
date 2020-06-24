import React from "react";
import { graphql } from "gatsby";

import Layout from "~layouts/default";
import SEO from "~utils/seo";
import PageTitle from "~components/PageTitle";
import ProjectCard from "~components/ProjectCard";

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" keywords={[`projects`, `articles`]} />

    <PageTitle title="Projects" subtitle="What I've been up to recently" />
    <section className="container mx-auto px-8 py-12">
      <div className="flex flex-row flex-wrap justify-start -mx-4">
        {data.projects.edges.map((project) => (
          <div className="md:w-1/2 w-full flex-grow-0 whitespace-normal px-4 mb-8">
            <ProjectCard project={project.node} />
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query ProjectPageQuery {
    projects: allSanityProject {
      edges {
        node {
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
  }
`;

export default ProjectPage;
