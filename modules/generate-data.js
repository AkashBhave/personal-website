import sanityClient from '../plugins/sanity-client'

const dataTypes = {
    PAGE: 'page',
    COLLECTION: 'collection'
}

module.exports = [
    // Collections
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
    },
    // Pages
    {
        name: 'home',
        type: dataTypes.PAGE,
        data: async () => {
            return await sanityClient.fetch('*[_id == "page_home"][0]')
        }
    },
    {
        name: 'about',
        type: dataTypes.PAGE,
        data: async () => {
            return await sanityClient.fetch('*[_id == "page_about"][0]')
        }
    }
]
