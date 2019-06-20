import sanityClient from '../plugins/sanity-client'

module.exports = {
    blog: [
        {
            // Relative path should have no leading/trailing slashes
            relativePath: 'blog',
            getData: async function() {
                return await sanityClient.fetch('*[_type == "post"]')
            },
            nested: true,
            nestedKey: 'slug.current'
        }
    ]
}
