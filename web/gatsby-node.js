const axios = require('axios')
const path = require(`path`)

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

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const query = await graphql(`
        {
            posts: allSanityPost {
                edges {
                    node {
                        slug {
                            current
                        }
                        id: _id
                    }
                }
            }
            projects: allSanityProject {
                edges {
                    node {
                        slug {
                            current
                        }
                        id: _id
                    }
                }
            }
        }
    `)
    if (query.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const Posts = query.data.posts.edges
    const PostTemplate = path.resolve('./src/templates/Post.js')
    Posts.forEach(post => {
        createPage({
            path: `/blog/${post.node.slug.current}`,
            component: PostTemplate,
            context: {
                id: post.node.id
            }
        })
    })

    const Projects = query.data.projects.edges
    const ProjectTemplate = path.resolve('./src/templates/Project.js')
    Projects.forEach(project => {
        createPage({
            path: `/projects/${project.node.slug.current}`,
            component: ProjectTemplate,
            context: {
                id: project.node.id
            }
        })
    })
}
