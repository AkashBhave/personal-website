import React from 'react'

import Layout from '../layouts/default'
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
