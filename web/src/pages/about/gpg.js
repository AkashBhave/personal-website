import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~layouts/default'
import SEO from '~utils/seo'
import PageTitle from '~components/PageTitle'
import BlockContentCode from '~components/BlockContentCode'

const AboutGPGPage = ({ data }) => (
    <Layout>
        <SEO
            title="GPG"
            keywords={[`about`, `gpg`, `gpg info`, `public key`]}
        />

        <PageTitle title="GPG" subtitle="My online identification." />

        <section class="container md:w-2/3 w-full mx-auto px-8 py-12">
            <div class="mb-8">
                <h1 class="text-4xl">Key ID</h1>
                <BlockContentCode
                    node={{
                        code: { code: data.page.gpg.id },
                        language: 'plaintext'
                    }}
                />
            </div>
            <div class="mb-8">
                <h1 class="text-4xl">Fingerprint</h1>
                <BlockContentCode
                    node={{
                        code: { code: data.page.gpg.fingerprint },
                        language: 'plaintext'
                    }}
                />
            </div>
            <div class="mb-8">
                <h1 class="text-4xl">Public Key</h1>
                <BlockContentCode
                    node={{
                        code: { code: data.page.gpg.publicKey },
                        language: 'plaintext'
                    }}
                />
            </div>
        </section>
    </Layout>
)

export const query = graphql`
    query AboutGPGPageQuery {
        page: sanityPageAbout {
            gpg: _rawGpg
        }
    }
`

export default AboutGPGPage
