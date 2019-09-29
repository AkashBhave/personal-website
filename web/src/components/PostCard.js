import React from 'react'

import { Link } from 'gatsby'
import Image from 'gatsby-image'

import styles from './PostCard.module.css'

const PostCard = props => {
    const post = props.post

    return (
        <div class={styles.postCard}>
            <Link to={`/blog/${post.slug.current}`}>
                <div class="post-image">
                    {post.mainImage ? (
                        <div>
                            <Image
                                class="w-full bg-gray-300"
                                fluid={post.mainImage.asset.fluid}
                            />
                        </div>
                    ) : (
                        <div
                            class="text-center bg-gray-200 text-blue-primary p-8"
                            v-else
                        >
                            <i class="text-200px far fa-file"></i>
                        </div>
                    )}
                </div>
                <div class="p-8 flex flex-col content-start">
                    <h3 class="font-serif font-bold text-3xl -mb-2 break-words">
                        {post.title}
                    </h3>
                    <h3 class="text-md font-light mt-4">
                        Published on
                        <span class="font-mono text-blue-tertiary ml-1">
                            {new Date(post.publishedAt).toLocaleDateString(
                                {},
                                {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }
                            )}
                        </span>
                    </h3>
                </div>
            </Link>
        </div>
    )
}

export default PostCard
