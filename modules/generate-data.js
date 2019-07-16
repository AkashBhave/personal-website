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
                '*[_type == "post"]{"relatedProject": postType.project -> {title, "slug": slug.current}, ...} | order(_createdAt asc)'
            )
        }
    },
    {
        name: 'projects',
        type: dataTypes.COLLECTION,
        data: async () => {
            return await sanityClient.fetch(
                '*[_type == "project"]{"relatedPosts": *[_type == "post" && references(^._id)][0...3], ...}'
            )
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
