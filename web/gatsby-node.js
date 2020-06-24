const axios = require("axios");
const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~layouts": path.resolve(__dirname, "src/layouts"),
        "~utils": path.resolve(__dirname, "src/utils"),
        "~images": path.resolve(__dirname, "src/images"),
        "~templates": path.resolve(__dirname, "src/templates")
      }
    }
  });
};

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions;

  // Latest commit node
  const commitNodeData = (await axios.get(
    "https://api.github.com/repos/AkashBhave/personal-website/commits"
  )).data[0];
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
  };
  const commitNode = { ...commitNodeData, ...commitNodeMeta };

  createNode(commitNode);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const query = await graphql(`
    {
      posts: allSanityPost {
        nodes {
          slug {
            current
          }
          id: _id
        }
      }
      projects: allSanityProject {
        nodes {
          slug {
            current
          }
          id: _id
        }
      }
    }
  `);
  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const Posts = query.data.posts.nodes;
  const PostTemplate = path.resolve("./src/templates/Post.js");
  Posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug.current}`,
      component: PostTemplate,
      context: {
        id: post.id
      }
    });
  });

  const Projects = query.data.projects.nodes;
  const ProjectTemplate = path.resolve("./src/templates/Project.js");
  Projects.forEach(project => {
    createPage({
      path: `/projects/${project.slug.current}`,
      component: ProjectTemplate,
      context: {
        id: project.id
      }
    });
  });
};
