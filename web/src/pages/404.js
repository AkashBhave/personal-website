import React from 'react'

import Layout from '../layouts/default'
import SEO from '../components/seo'

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404 (Not Found)" />
            <div>
                <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
                    Error: 404 (Not Found)
                </h2>
            </div>
        </Layout>
    )
}

export default NotFoundPage
