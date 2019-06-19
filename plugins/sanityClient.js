const sanityClientLib = require('@sanity/client')

const sanityConfig = {
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN, // or leave blank to be anonymous user
    useCdn: false // `false` if you want to ensure fresh data
}

const sanityClient = sanityClientLib(sanityConfig)

// Inject into context
export default ({ app }, inject) => {
    // Set the function directly on the context.app object
    app.sanityClient = sanityClient
}
