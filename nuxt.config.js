require('dotenv').config()

export default {
    mode: 'universal',
    pageTransition: 'slide-fade',
    env: {
        // Sanity.io
        SANITY_TOKEN: process.env.SANITY_TOKEN,
        SANITY_DATASET: process.env.SANITY_DATASET,
        SANITY_ID: process.env.SANITY_ID,
        // Site default title
        SITE_TITLE: process.env.SITE_TITLE
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
    modules: [],
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
