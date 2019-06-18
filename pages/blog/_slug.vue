<template>
    <main class="container mx-auto p-8">
        <h1 class="font-bold text-4xl font-serif text-center">{{title}}</h1>
        <block-content :blocks="body"/>
    </main>
</template>

<script>
import sanityClient from '~/plugins/sanityClient'
import BlockContent from 'sanity-blocks-vue-component'

export default {
    async validate({ params }) {
        const postQuery = `*[_type == "post" && slug.current == "${params.slug}"][0]`
        let postData = await sanityClient.fetch(postQuery)
        if (postData === null || postData._id === null) {
            return false
        } else {
            return true
        }
    },
    components: {
        BlockContent
    },
    async asyncData({ params, error }) {
        const postQuery = `*[_type == "post" && slug.current == "${params.slug}"][0]`
        let postData = await sanityClient.fetch(postQuery)
        return postData
    },
    data() {
        return {}
    }
}
</script>
