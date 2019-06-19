<template>
    <main class="container mx-auto p-8">
        <h1 class="font-bold text-4xl font-serif text-center">{{title}}</h1>
        <block-content :blocks="body" :serializers="serializers"/>
    </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import BlockContentCode from '~/components/BlockContentCode'

export default {
    async validate(context) {
        const postQuery = `*[_type == "post" && slug.current == "${context.params.slug}"][0]`
        let postData = await context.app.sanityClient.fetch(postQuery)
        if (postData === null || postData._id === null) {
            return false
        } else {
            return true
        }
    },
    components: {
        BlockContent,
        BlockContentCode
    },
    async asyncData(context) {
        const postQuery = `*[_type == "post" && slug.current == "${context.params.slug}"][0]`
        let postData = await context.app.sanityClient.fetch(postQuery)
        return postData
    },
    data() {
        return {
            serializers: {
                types: {
                    code: BlockContentCode
                }
            }
        }
    }
}
</script>
