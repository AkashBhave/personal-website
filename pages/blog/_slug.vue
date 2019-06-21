<template>
    <main>
        <div class="page-content">
            <div class="page-header flex flex-wrap items-center mb-8 md:shadow-none shadow">
                <div class="flex flex-col lg:w-2/5 w-full text-center p-8">
                    <h3 class="mx-auto w-32 text-xl font-light p-2 mb-2 bg-blue-primary rounded">
                        <span>Project</span>
                        <i class="fas fa-hammer ml-2"></i>
                    </h3>
                    <h1 class="page-title">{{ title }}</h1>
                    <h3 class="text-xl">
                        By
                        <span class="italic text-blue-tertiary">Akash Bhave</span>
                    </h3>
                    <h3>
                        Published on
                        <span class="text-blue-tertiary">{{ createdAt }}</span>
                    </h3>
                    <div class="mt-4">
                        <span
                            v-for="keyword in keywords"
                            :key="keyword"
                            class="inline-block mx-2 font-light p-2 text-light bg-blue-secondary rounded"
                        >{{ keyword }}</span>
                    </div>
                </div>
                <div class="flex lg:w-3/5 w-full flex-grow">
                    <block-content
                        :blocks="mainImage"
                        :serializers="serializers"
                        :projectId="env.sanity.id"
                        :dataset="env.sanity.dataset"
                    />
                </div>
            </div>

            <div class="page-body container mx-auto p-8">
                <block-content
                    :blocks="body"
                    :serializers="serializers"
                    :projectId="env.sanity.id"
                    :dataset="env.sanity.dataset"
                />
            </div>
        </div>
    </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import BlockContentCode from '~/components/BlockContentCode'
import BlockContentImage from '~/components/BlockContentImage'

require('@fortawesome/fontawesome-free/css/all.css')

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
                    code: BlockContentCode,
                    image: BlockContentImage
                }
            }
        }
    },
    computed: {
        createdAt() {
            let createdAtDate = new Date(this.$data._createdAt)
            return createdAtDate.toLocaleString()
        }
    }
}
</script>
