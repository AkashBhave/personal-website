import sanityClient from '../plugins/sanity-client'

const dataTypes = {
    PAGE: 'page',
    COLLECTION: 'collection'
}

module.exports = [
    {
        name: 'posts',
        type: dataTypes.COLLECTION,
        data: async () => {
            return await sanityClient.fetch(
                '*[_type == "post"] | order(_createdAt asc)'
            )
        }
    },
    {
        name: 'projects',
        type: dataTypes.COLLECTION,
        data: async () => {
            return await sanityClient.fetch('*[_type == "project"]')
        }
    }
]
