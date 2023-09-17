import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Image from "gatsby-image";

import BlockContent from "~components/BlockContent";

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
          <p className="md:text-4xl text-3xl mb-2">
            My name is
            <span className="font-bold"> Akash</span>, and I'm a
          </p>
          <div className="md:text-3xl text-2xl italic">
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
    <section className="px-8 py-12 bg-blue-tertiary text-light">
      <div className="flex flex-wrap container mx-auto md:w-2/3 w-full">
        <div className="md:w-1/3 w-full flex md:justify-end justify-center md:mb-0 mb-8">
          <div className="md:w-full w-2/3">
            <Image
              className="shadow border-standard"
              fluid={data.about.portrait.asset.fluid}
              alt="Image of Me"
            />
          </div>
        </div>
        <div className="style-normal md:w-2/3 w-full flex md:justify-start md:ml-8 md:-mr-8">
          <BlockContent body={data.about._rawDescription} />
        </div>
      </div>
    </section>
    <section className="px-8 py-12 container mx-auto">
      <h2 className="font-bold text-4xl mb-8">Recent Posts</h2>
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
    }
    about: sanityAbout {
      portrait {
        asset {
          fluid(maxHeight: 500, maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawDescription
    }
    posts: allSanityPost(limit: 3, sort: { fields: publishedAt, order: DESC }) {
      ...Posts
    }
  }
`;

export default IndexPage;
