<template>
    <main class="container mx-auto p-8">
        <h1 class="font-bold text-4xl font-serif text-center">{{title}}</h1>
    </main>
</template>

<script>
import sanityClient from '~/plugins/sanityClient'

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
    async asyncData({ params, error }) {
        const postQuery = `*[_type == "post" && slug.current == "${params.slug}"][0]`
        let postData = await sanityClient.fetch(postQuery)
        return postData
    }
}
</script>
