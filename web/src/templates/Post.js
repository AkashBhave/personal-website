import React from 'react'
import { graphql } from 'gatsby'

import BlockContent from '@sanity/block-content-to-react'

import Layout from '../layouts/default'

import styles from './Post.module.css'

const Post = ({ data: { post } }) => {
    return (
        <Layout>
            <div className={`md:shadow-none shadow ${styles.header}`}>
                <div className="lg:w-2/5 w-full flex flex-col text-center">
                    <div className={styles.headerInfo}>
                        <h1
                            class={`md:text-5xl text-4xl ${styles.headerTitle}`}
                        >
                            {post.title}
                        </h1>
                        <h3 class="text-xl mt-4">
                            By
                            <span class="italic text-blue-tertiary ml-1">
                                Akash Bhave
                            </span>
                        </h3>
                        <h3 class="text-base mt-2">
                            Published on
                            <span class="font-mono text-blue-tertiary ml-1">
                                {new Date(post.publishedAt).toLocaleDateString(
                                    {},
                                    {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }
                                )}
                            </span>
                        </h3>
                        <div class="mt-6">
                            {post.keywords.map(keyword => (
                                <span className={styles.headerKeyword}>
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`lg:w-3/5 w-full ${styles.headerImage}`}>
                    <div className="mx-auto">
                        {post.mainImage ? (
                            <div>
                                <Image
                                    className="w-full bg-gray-300"
                                    fluid={post.mainImage.asset.fluid}
                                />
                            </div>
                        ) : (
                            <div className="h-full flex items-center text-blue-secondary p-8">
                                <i className="text-250px far fa-file"></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
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
                    fluid(maxWidth: 1000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`

export default Post
