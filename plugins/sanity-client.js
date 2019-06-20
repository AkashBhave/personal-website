// Ensure that environment variables are sourced
require('dotenv').config()

const sanityClientLib = require('@sanity/client')
const sanityConfig = {
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: false // `false` to ensure fresh data
}
const sanityClient = sanityClientLib(sanityConfig)

export default sanityClient
