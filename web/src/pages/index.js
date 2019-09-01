import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />

            <section className="text-center">WEBSITE</section>
        </Layout>
    )
}

export default IndexPage
