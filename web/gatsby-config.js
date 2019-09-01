module.exports = {
    siteMetadata: {
        title: `Akash Bhave`,
        description: `Personal website of Akash Bhave`,
        author: `Akash Bhave`
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
                icon: `src/images/logo.svg`
            }
        },
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                tailwind: true
            }
        },
        `gatsby-plugin-offline`
    ]
}
