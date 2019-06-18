require('dotenv').config()
const sanityLib = require('@sanity/client')
// Importing the sanityClient from ./plugins/sanityClient.js didn't work
const sanityClient = sanityLib({
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false
})

export default {
    mode: 'universal',
    transition: 'slide-fade',
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
            },
            // Monospaced font - Hack
            {
                rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['~/plugins/highlightjs'],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/dotenv'],
    generate: {
        async routes() {
            // Blog posts
            let postRoutes = await sanityClient.fetch('*[_type == "post"]')
            postRoutes.forEach(function(part, index) {
                this[index] = '/blog/' + this[index].slug.current
            }, postRoutes)

            return postRoutes
        }
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
        extend(config, ctx) {}
    }
}
