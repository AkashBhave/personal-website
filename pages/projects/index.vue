<template>
    <main>
        <the-title
            :title="'Projects'"
            :subtitle="'What I\'ve been up to recently (and not so recently).'"
        ></the-title>
        <div class="container mx-auto px-8 py-12">
            <div class="flex flex-row flex-wrap justify-left -mx-4">
                <div
                    v-for="project in projects"
                    :key="project._id"
                    class="flex-grow-0 md:w-1/2 w-full whitespace-normal px-4 mb-8"
                >
                    <div class="flex flex-col justify-between cursor-pointer shadow border h-full">
                        <nuxt-link :to="'/blog/' + project.slug.current">
                            <no-ssr>
                                <div v-if="project.mainImage">
                                    <img
                                        class="w-full bg-gray-300"
                                        :src="imageBlocktoURL(project.mainImage)"
                                        alt
                                        srcset
                                    />
                                </div>
                                <div class="text-center bg-gray-200 text-blue-secondary p-8" v-else>
                                    <i class="text-200px far fa-file"></i>
                                </div>
                            </no-ssr>
                            <div class="p-8 flex flex-col content-start">
                                <h3
                                    class="font-serif font-bold text-3xl -mb-2 break-words"
                                >{{project.title}}</h3>
                                <h3 class="text-md font-light mt-4">
                                    Updated on
                                    <span
                                        class="text-blue-tertiary"
                                    >{{ new Date(project._updatedAt).toLocaleString() }}</span>
                                </h3>
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

export default {
    head() {
        return {
            title: 'Projects | ' + process.env.SITE_TITLE
        }
    },
    async asyncData(context) {
        return { projects: require('~/static/_data/projects/_.json') }
    },
    components: {
        TheTitle
    },
    methods: {
        imageBlocktoURL(source) {
            if (process.client) {
                let windowScale = Math.round(window.innerWidth / 2)
                return builder
                    .image(source)
                    .width(windowScale)
                    .height(Math.round((windowScale * 9) / 16))
            }
        }
    }
}
</script>

