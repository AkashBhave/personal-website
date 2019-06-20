<template>
    <main class="container mx-auto p-8">
        <div class="page-content">
            <h1 class="page-title">{{title}}</h1>
            <block-content
                :blocks="body"
                :serializers="serializers"
                :projectId="env.sanity.id"
                :dataset="env.sanity.dataset"
            />
        </div>
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
