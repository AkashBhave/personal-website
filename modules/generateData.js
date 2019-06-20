/*
 **  Sanity.io client configuration
 */
const sanityClientLib = require('@sanity/client')
const sanityConfig = {
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false
}
const sanityClient = sanityClientLib(sanityConfig)

module.exports = {
    blog: [
        {
            // Relative path should have no leading/trailing slashes
            relativePath: 'blog',
            getData: async function() {
                return await sanityClient.fetch('*[_type == "post"]')
            },
            generateNested: true
        }
    ]
}
