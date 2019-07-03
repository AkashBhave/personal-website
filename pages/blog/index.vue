<template>
    <main class="container mx-auto px-8 py-12">
        <div class="flex flex-row flex-wrap justify-left -mx-4">
            <div
                v-for="post in posts"
                :key="post._id"
                class="flex-grow-0 md:w-1/3 w-full whitespace-normal px-4 mb-8"
            >
                <div class="flex flex-col justify-between cursor-pointer shadow-md border h-full">
                    <nuxt-link :to="'/blog/' + post.slug.current">
                        <no-ssr>
                            <img
                                class="w-full bg-gray-300"
                                :src="imageBlocktoURL(post.mainImage)"
                                alt
                                srcset
                            />
                        </no-ssr>
                        <div class="p-8">
                            <h3 class="font-serif font-bold text-3xl">{{post.title}}</h3>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/plugins/sanity-client'

let builder = imageUrlBuilder(sanityClient)

export default {
    head() {
        return {
            title: 'Blog | ' + process.env.SITE_TITLE
        }
    },
    async asyncData(context) {
        return { posts: require('~/static/_data/blog/_.json') }
    },
    methods: {
        imageBlocktoURL(source) {
            if (process.client) {
                return builder
                    .image(source)
                    .width(Math.round(window.innerWidth))
                    .height(Math.round((window.innerWidth * 9) / 16))
            }
        }
    }
}
</script>

