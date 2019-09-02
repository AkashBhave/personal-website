const axios = require('axios')

exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest
}) => {
    const { createNode } = actions

    // Latest commit node
    const commitNodeData = (await axios.get(
        'https://api.github.com/repos/AkashBhave/personal-website/commits'
    )).data[0]
    const commitNodeMeta = {
        id: createNodeId(`latest-commit-${commitNodeData.sha}`),
        parent: null,
        children: [],
        internal: {
            type: `LatestCommit`,
            mediaType: `text/html`,
            content: JSON.stringify(commitNodeData),
            contentDigest: createContentDigest(commitNodeData)
        }
    }
    const commitNode = { ...commitNodeData, ...commitNodeMeta }

    createNode(commitNode)
}

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    // Rename /gpg/ to /about/gpg/
    if (page.path === '/about-gpg/') {
        const updatedPage = { ...page }
        updatedPage.path = '/about/gpg/'
        deletePage(page)
        createPage(updatedPage)
    }
}