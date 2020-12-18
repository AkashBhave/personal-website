import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import Typewriter from "typewriter-effect";
import Layout from "~layouts/default";
import SEO from "~utils/seo";
import CardGrid from "~components/CardGrid";

import styles from "./index.module.css";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`home`, `index`, `akash bhave`, `gatsby`]} />
    <section>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.heroTextHello}>Hello.</p>
          <p className="md:text-5xl text-4xl mb-2">
            My name is
            <span className="font-bold"> Akash</span>, and I'm a
          </p>
          <div className="md:text-4xl text-3xl italic">
            <Typewriter
              options={{
                // Append period to each phrase
                strings: data.page.phrases.map(phrase => phrase + "."),
                autoStart: true,
                loop: true,
                delay: "natural"
              }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-end bg-light relative">
          <BackgroundImage
            fluid={data.page.portrait.asset.fluid}
            className={styles.heroPortrait}
          />
        </div>
      </div>
    </section>
    <section className="px-8 py-12 bg-blue-secondary text-light">
      <div className="container mx-auto">
        <h2 className="uppercase font-bold text-4xl mb-8">Skills</h2>
        <div className="flex flex-wrap">
          {["Languages", "Platforms"].map(skillType => (
            <div className="w-full md:w-1/2 mb-4">
              <h3 className="text-xl font-serif mb-4">{skillType}</h3>
              <div>
                {data.page.skills
                  .filter(s => s.type == skillType)
                  .map(skill => (
                    <div className="relative text-lg mb-4 md:mr-16 bg-light h-12 border-2 border-blue-tertiary rounded">
                      <div
                        className="flex items-center top-0 left-0 bg-blue-primary opacity-100 h-full border-r border-blue-tertiary"
                        style={{
                          width: `${skill.rating * 10}%`
                        }}
                      >
                        <h4 className="ml-4 text-blue-tertiary absolute">
                          <span className="font-bold">{skill.title}</span>
                          <span className="opacity-50"> | {skill.rating}</span>
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="px-8 py-12 container mx-auto">
      <h2 className="uppercase font-bold text-4xl mb-8">Recent Posts</h2>
      <CardGrid
        isProject={false}
        showProject={false}
        items={data.posts.nodes}
      />
    </section>
  </Layout>
);

export const query = graphql`
  query IndexPageQuery {
    page: sanityHome {
      portrait {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      phrases
      skills {
        title
        rating
        type
      }
    }
    posts: allSanityPost(limit: 3, sort: { fields: publishedAt, order: DESC }) {
      ...Posts
    }
  }
`;

export default IndexPage;
