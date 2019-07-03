<template>
    <main>
        <the-title :title="'Blog'" :subtitle="'Fresh off the CMS.'"></the-title>
        <div class="container mx-auto px-8 py-12">
            <div class="flex flex-row flex-wrap justify-left -mx-4">
                <div
                    v-for="post in posts"
                    :key="post._id"
                    class="flex-grow-0 md:w-1/3 w-full whitespace-normal px-4 mb-8"
                >
                    <div class="flex flex-col justify-between cursor-pointer shadow border h-full">
                        <nuxt-link :to="'/blog/' + post.slug.current">
                            <no-ssr>
                                <img
                                    class="w-full bg-gray-300"
                                    :src="imageBlocktoURL(post.mainImage)"
                                    alt
                                    srcset
                                />
                            </no-ssr>
                            <div class="p-8 flex flex-col content-start">
                                <h3 class="font-serif font-bold text-3xl -mb-2">{{post.title}}</h3>
                                <h3 class="text-md font-light mt-4">
                                    Published on
                                    <span
                                        class="text-blue-tertiary"
                                    >{{ new Date(post._createdAt).toLocaleString() }}</span>
                                </h3>
                                <div
                                    class="w-auto mr-auto text-md font-light text-light py-2 px-4 mt-4 rounded"
                                    :class="getPostType(post.postType.type).color"
                                >
                                    <span>{{ getPostType(post.postType.type).name }}</span>
                                    <i class="ml-2" :class="getPostType(post.postType.type).icon"></i>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/plugins/sanity-client'
let builder = imageUrlBuilder(sanityClient)

import TheTitle from '~/components/TheTitle'

import getPostType from '~/plugins/post-type'

export default {
    head() {
        return {
            title: 'Blog | ' + process.env.SITE_TITLE
        }
    },
    async asyncData(context) {
        return { posts: require('~/static/_data/blog/_.json') }
    },
    components: {
        TheTitle
    },
    methods: {
        imageBlocktoURL(source) {
            if (process.client) {
                return builder
                    .image(source)
                    .width(Math.round(window.innerWidth))
                    .height(Math.round((window.innerWidth * 9) / 16))
            }
        },
        getPostType(type) {
            return getPostType(type)
        }
    }
}
</script>

