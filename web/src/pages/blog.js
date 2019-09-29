import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import BlockContent from '@sanity/block-content-to-react'
import PostCardGrid from '../components/PostCardGrid'
import Layout from '../layouts/default'
import SEO from '../utils/seo'
import PageTitle from '../components/PageTitle'

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Blog" keywords={[`blog`, `articles`]} />

        <PageTitle title="Blog" subtitle="Fresh off the CMS" />

        <section className="mx-8 my-12">
            <PostCardGrid posts={data.posts.edges} />
        </section>
    </Layout>
)

export const queryFragment = graphql`
    fragment BlogPosts on SanityPostConnection {
        edges {
            node {
                title
                publishedAt
                slug {
                    current
                }
                postType {
                    type
                    project {
                        title
                        slug {
                            current
                        }
                    }
                }
                keywords
                mainImage {
                    asset {
                        fluid(maxWidth: 700) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`

export const query = graphql`
    query BlogPageQuery {
        posts: allSanityPost {
            ...BlogPosts
        }
    }
`

export default BlogPage
