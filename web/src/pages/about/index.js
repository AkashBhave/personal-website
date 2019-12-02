import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import BlockContent from '@sanity/block-content-to-react'
import BlockContentCode from '~components/BlockContentCode'
import Layout from '~layouts/default'
import SEO from '~utils/seo'
import PageTitle from '~components/PageTitle'

const AboutPage = ({ data }) => (
    <Layout>
        <SEO title="About" keywords={[`about`]} />

        <PageTitle title="About" subtitle="Who am I?" />

        <section className="mx-8 my-12">
            <div className="flex flex-wrap container mx-auto md:w-2/3 w-full">
                <div className="md:w-1/3 w-full flex md:justify-end justify-center md:mb-0 mb-8">
                    <div className="md:w-full w-2/3">
                        <Image
                            className="shadow border-standard"
                            fluid={data.page.mainImage.asset.fluid}
                            alt="Image of Me"
                        />
                    </div>
                </div>
                <div className="style-normal md:w-2/3 w-full flex md:justify-start md:ml-8 md:-mr-8">
                    <BlockContent
                        blocks={data.page._rawDescription || []}
                        serializers={{
                            types: { codeBlock: BlockContentCode }
                        }}
                        projectId={process.env.GATSBY_SANITY_ID}
                        dataset={process.env.GATSBY_SANITY_DATASET}
                    />
                </div>
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query AboutPageQuery {
        page: sanityPageAbout {
            mainImage {
                asset {
                    fluid(maxHeight: 500, maxWidth: 500) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            _rawDescription
        }
    }
`

export default AboutPage
