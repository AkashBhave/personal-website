import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../layouts/default'
import SEO from '../utils/seo'

import styles from './index.module.css'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO
            title="Home"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />

        <section>
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <p className="font-bold font-serif md:text-5xl text-4xl">
                        Hello.
                    </p>
                    <p className="md:text-4xl text-3xl">
                        My name is
                        <span className="font-bold"> Akash</span>, and I'm a
                    </p>
                    <div className="md:text-3xl text-2xt italic"></div>
                </div>
                <BackgroundImage
                    fluid={data.page.portrait.asset.fluid}
                    className={styles.heroPortrait}
                />
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query IndexPageQuery {
        page: sanityPageHome {
            portrait {
                asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            _id
            phrases
        }
    }
`

export default IndexPage
