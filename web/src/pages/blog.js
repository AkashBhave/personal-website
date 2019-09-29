import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import BlockContent from '@sanity/block-content-to-react'
import Layout from '../layouts/default'
import SEO from '../utils/seo'
import PageTitle from '../components/PageTitle'

const BlogPage = () => (
    <Layout>
        <SEO title="Blog" keywords={[`blog`, `articles`]} />

        <PageTitle title="Blog" subtitle="Fresh off the CMS" />

        <section className="mx-8 my-12"></section>
    </Layout>
)

export default BlogPage
