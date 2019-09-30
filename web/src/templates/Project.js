import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import BlockContent from '@sanity/block-content-to-react'
import SEO from '../utils/seo'
import Layout from '../layouts/informational'
import BackButton from '../components/BackButton'

const Project = ({ data: { project } }) => {
    return (
        <Layout
            seo={
                <SEO
                    title={`${project.title} | Projects`}
                    keywords={[`projects`, `portfolio`]}
                />
            }
            info={
                <>
                    <BackButton to="/projects" title="Projects" />
                    <div className="flex flex-1 flex-col py-12 px-8 justify-center h-full">
                        <div>
                            {project.links.map(link => (
                                <a
                                    href={link.url}
                                    className="inline-block mb-2 mx-2 w-auto text-xl font-light py-2 px-4 rounded link-bg bg-blue-tertiary"
                                >
                                    <i className={`mr-2 ${link.iconName}`}></i>
                                    <span>{link.title}</span>
                                </a>
                            ))}
                        </div>
                        <h1 className="md:text-5xl text-4xl font-serif font-bold -mb-2 mt-6">
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
                                <span className="inline-block mb-2 mx-2 p-2 font-light text-light bg-blue-secondary rounded">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            }
            mainImage={project.mainImage}
        >
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
