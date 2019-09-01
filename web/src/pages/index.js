import React from 'react'
import { graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import Layout from '../layouts/default'
import SEO from '../utils/seo'

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />

            <section className="h-full">
                <div className="flex flex-wrap-reverse h-full">
                    <div className="flex flex-col md:justify-center justify-start md:w-1/2 w-full p-8">
                        <p className="font-bold font-serif md:text-5xl text-4xl">
                            Hello.
                        </p>
                        <p className="md:text-4xl text-3xl">
                            My name is
                            <span className="font-bold">Akash</span>, and I'm a
                        </p>
                        <div className="md:text-3xl text-2xl italic"></div>
                    </div>
                </div>
                <BackgroundImage className="flex flex-col justify-end md:w-1/2 w-full bg-blue-secondary bg-local bg-contain bg-no-repeat bg-center" />
            </section>
        </Layout>
    )
}

export default IndexPage
