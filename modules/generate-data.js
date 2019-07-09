import sanityClient from '../plugins/sanity-client'

module.exports = {
    blog: [
        {
            // Relative path should have no leading/trailing slashes
            relativePath: 'blog',
            getData: async function() {
                return await sanityClient.fetch(
                    '*[_type == "post"] | order(_createdAt asc)'
                )
            },
            nested: true,
            nestedKey: 'slug.current'
        }
    ],
    projects: [
        {
            // Relative path should have no leading/trailing slashes
            relativePath: 'projects',
            getData: async function() {
                return await sanityClient.fetch('*[_type == "project"]')
            },
            nested: true,
            nestedKey: 'slug.current'
        }
    ]
}
