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
                    <card-blog :post="post" :hide-image="false"></card-blog>
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
import CardBlog from '~/components/CardBlog'

export default {
    head() {
        return {
            title: 'Blog | ' + process.env.SITE_TITLE
        }
    },
    async asyncData(context) {
        return { posts: require('~/static/_data/collection/posts.json') }
    },
    components: {
        TheTitle,
        CardBlog
    }
}
</script>

