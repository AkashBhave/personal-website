export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
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
                href: '~/assets/brand/favicon.ico'
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
    plugins: [],
    /*
     ** Nuxt.js modules
     */
    modules: [],
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
