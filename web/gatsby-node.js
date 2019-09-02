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
    const commitNode = Object.assign({}, commitNodeData, commitNodeMeta)

    createNode(commitNode)
}
