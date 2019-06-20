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
    validate(context) {
        try {
            let data = require(`~/static/_data/blog/${context.params.slug}`)
            return data != null && data._id != null
        } catch (e) {
            return false
        }
    },
    components: {
        BlockContent,
        BlockContentCode
    },
    asyncData(context) {
        return require(`~/static/_data/blog/${context.params.slug}`)
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
