// Environment variables
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Akash Bhave`,
    description: `The personal website of Akash Bhave.`,
    author: `Akash Bhave`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akash Bhave`,
        short_name: `Akash Bhave`,
        start_url: `/`,
        background_color: `rgba(252, 255, 250, 1)`,
        theme_color: `rgba(168, 218, 220, 1)`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
  ],
};
