import React from 'react'

import Layout from '../layouts/default'
import SEO from '../utils/seo'
import PageTitle from '../components/PageTitle'

const AboutPage = () => (
    <Layout>
        <SEO title="About" keywords={[`about`]} />

        <PageTitle title="About" subtitle="Who am I?" />
    </Layout>
)

export default AboutPage
