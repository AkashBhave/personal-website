const sanityClient = require('@sanity/client')

const defaultConfig = {
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: false // `false` if you want to ensure fresh data
}

export default sanityClient(defaultConfig)
