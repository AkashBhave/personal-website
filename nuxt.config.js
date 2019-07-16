require('dotenv').config()

import sanityClient from './plugins/sanity-client'

export default {
    mode: 'universal',
    pageTransition: 'slide-fade',
    layoutTransition: 'slide-fade',
    env: {
        SITE_TITLE: process.env.SITE_TITLE,
        SANITY_ID: process.env.SANITY_ID,
        SANITY_DATASET: process.env.SANITY_DATASET,
        EMAIL_ENDPOINT: process.env.EMAIL_ENDPOINT,
        RECAPTCHA_SITE: process.env.RECAPTCHA_SITE
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'Akash Bhave',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'favicon.ico'
            },
            // Heading font - Libre Baskerville
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: 'rgba(168, 218, 220, 1)',
        height: '2px'
    },
    /*
     ** Global CSS
     */
    css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/highlightjs',
        '~/plugins/sanity-image',
        { src: '~/plugins/lazyload', ssr: false }
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['~/modules/generate', '@nuxtjs/axios'],
    generate: {
        async routes() {
            let routes = []

            // Blog posts
            let posts = await sanityClient.fetch('*[_type == "post"]')
            routes.push(
                ...posts.map(post => {
                    return {
                        route: '/blog/' + post.slug.current,
                        payload: post
                    }
                })
            )

            // Project pages
            let projects = await sanityClient.fetch('*[_type == "project"]')
            routes.push(
                ...projects.map(project => {
                    return {
                        route: '/projects/' + project.slug.current,
                        payload: project
                    }
                })
            )

            return routes
        },
        fallback: '404.html'
    },
    /*
     ** Build configuration
     */
    build: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.node = {
                fs: 'empty'
            }
        }
    }
}
