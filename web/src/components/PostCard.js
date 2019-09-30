import React from 'react'

import { Link } from 'gatsby'
import Image from 'gatsby-image'

import PostTypeBadge from './PostTypeBadge'

import styles from './PostCard.module.css'

const PostCard = props => {
    const post = props.post

    return (
        <div className={`link-edge rounded ${styles.card}`}>
            <Link to={`/blog/${post.slug.current}`}>
                <div className="post-image">
                    {post.mainImage ? (
                        <div>
                            <Image
                                className="w-full bg-gray-300"
                                fluid={post.mainImage.asset.fluid}
                            />
                        </div>
                    ) : (
                        <div className="text-center bg-gray-200 text-blue-primary p-8">
                            <i className="text-200px far fa-file"></i>
                        </div>
                    )}
                </div>
                <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <h3 className="text-md font-light mt-4">
                        Published on
                        <span className={styles.cardDate}>
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
                    <PostTypeBadge
                        showProject={props.showProject}
                        {...post.postType}
                    />
                </div>
            </Link>
        </div>
    )
}

export default PostCard
