import React from 'react'

import Layout from '../layouts/default'
import SEO from '../utils/seo'
import PageTitle from '../components/PageTitle'

const ContactPage = () => (
    <Layout>
        <SEO
            title="Contact"
            keywords={[`contact`, `support`, `email`, `notify`]}
        />

        <PageTitle title="Contact" subtitle="Get in touch!" />
    </Layout>
)

export default ContactPage
