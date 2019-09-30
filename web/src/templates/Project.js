import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import BlockContent from '@sanity/block-content-to-react'
import Layout from '../layouts/default'
import BackButton from '../components/BackButton'

import styles from './Post.module.css'

const Project = ({ data: { project } }) => {
    return (
        <Layout>
            <div className={`md:shadow-none shadow ${styles.header}`}>
                <div className="lg:w-2/5 w-full flex flex-col text-center">
                    <BackButton to="/projects" title="Projects" />
                    <div className={styles.headerInfo}>
                        <div>
                            {project.links.map(link => (
                                <a
                                    href={link.url}
                                    className="inline-block mb-2 mx-2 w-auto text-xl font-light text-light py-2 px-4 rounded shadow bg-blue-tertiary"
                                >
                                    <i className={`mr-2 ${link.iconName}`}></i>
                                    <span>{link.title}</span>
                                </a>
                            ))}
                        </div>
                        <h1
                            className={`md:text-5xl text-4xl ${styles.headerTitle}`}
                        >
                            {project.title}
                        </h1>
                        <h3 className="text-base mt-4">
                            Updated on
                            <span className="font-mono text-blue-tertiary ml-1">
                                {new Date(project.updatedAt).toLocaleDateString(
                                    {},
                                    {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    }
                                )}
                            </span>
                        </h3>
                        <div className="mt-6">
                            {project.keywords.map(keyword => (
                                <span className={styles.headerKeyword}>
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className={`lg:w-3/5 w-full ${styles.headerImage} ${
                        project.mainImage ? null : 'flex'
                    }`}
                >
                    <div className="mx-auto">
                        {project.mainImage ? (
                            <div>
                                <Image
                                    className="w-full bg-gray-300 block"
                                    fluid={project.mainImage.asset.fluid}
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
            <div className={`style-normal md:w-2/3 w-full ${styles.content}`}>
                <BlockContent
                    blocks={project.description || []}
                    serializers={
                        {
                            // types: { captionedImage: BlockContentImage }
                        }
                    }
                    projectId={process.env.GATSBY_SANITY_ID}
                    dataset={process.env.GATSBY_SANITY_DATASET}
                />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectQuery($id: String) {
        project: sanityProject(_id: { eq: $id }) {
            title
            updatedAt: _updatedAt
            slug {
                current
            }
            description: _rawDescription
            keywords
            links {
                iconName
                title
                url
            }
            mainImage {
                asset {
                    fluid(maxWidth: 1920) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`

export default Project
