import React from 'react'
import { graphql } from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import Layout from '../layouts/default'

const Post = ({ data: { post } }) => {
    return <Layout>{JSON.stringify(post)}</Layout>
}

export const query = graphql`
    query PostQuery($id: String) {
        post: sanityPost(_id: { eq: $id }) {
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
            _rawBody
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
`

export default Post
