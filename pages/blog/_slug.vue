<template>
    <main>
        <div class="page-content">
            <div class="page-header flex flex-wrap mb-4 md:shadow-none shadow">
                <div class="flex flex-col lg:w-2/5 w-full text-center">
                    <nuxt-link :to="'/blog'">
                        <div
                            class="flex-1 w-full bg-blue-primary text-light font-bold text-uppercase py-4 text-xl shadow link-bg"
                        >
                            <i class="fas fa-arrow-left mr-2"></i>
                            <span>Blog</span>
                        </div>
                    </nuxt-link>
                    <div class="flex flex-1 flex-col py-12 px-8 justify-center h-full">
                        <h3
                            class="mx-auto w-auto text-xl font-light text-light py-2 px-4 mb-2 rounded"
                            :class="[relatedProject ? 'shadow link-bg' : '', type.color]"
                        >
                            <div v-if="relatedProject">
                                <nuxt-link
                                    :to="`/projects/${relatedProject.slug}`"
                                    :title="relatedProject.title"
                                >
                                    <i class="mr-2" :class="type.icon"></i>
                                    <span>
                                        {{ type.name }}:
                                        <div
                                            class="text-sm opacity-75 inline-block"
                                        >{{ relatedProject.title }}</div>
                                    </span>
                                </nuxt-link>
                            </div>
                            <div v-else>
                                <i class="mr-2" :class="type.icon"></i>
                                <span>{{ type.name }}</span>
                            </div>
                        </h3>
                        <h1 class="page-title md:text-5xl text-4xl -mb-2">{{ title }}</h1>
                        <h3 class="text-xl mt-2">
                            By
                            <span class="italic text-blue-tertiary">Akash Bhave</span>
                        </h3>
                        <h3 class="mt-2">
                            Published on
                            <span class="font-mono text-blue-tertiary">{{ createdAt }}</span>
                        </h3>
                        <div class="mt-4">
                            <span
                                v-for="keyword in keywords"
                                :key="keyword"
                                class="inline-block mx-2 font-light p-2 text-light bg-blue-primary rounded"
                            >{{ keyword }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex lg:w-3/5 w-full flex-grow bg-gray-200 border">
                    <div class="mx-auto">
                        <div v-if="mainImage">
                            <block-content
                                :blocks="mainImage"
                                :serializers="serializers"
                                :projectId="sanity.id"
                                :dataset="sanity.dataset"
                            />
                        </div>
                        <div class="h-full flex items-center text-blue-primary p-8" v-else>
                            <i class="text-250px far fa-file"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-body container mx-auto p-8 md:w-2/3 w-full">
                <block-content
                    :blocks="body"
                    :serializers="serializers"
                    :projectId="sanity.id"
                    :dataset="sanity.dataset"
                />
            </div>
        </div>
    </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import BlockContentCode from '~/components/BlockContentCode'
import BlockContentImage from '~/components/BlockContentImage'

import getPostType from '~/plugins/post-type'

export default {
    validate(context) {
        try {
            let data = require(`~/static/_data/collection/posts.json`).find(
                post => {
                    return post.slug.current == context.params.slug
                }
            )
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
        let data = require(`~/static/_data/collection/posts.json`).find(
            post => {
                return post.slug.current == context.params.slug
            }
        )

        if (!data.mainImage) {
            data.mainImage = false
        }

        return data
    },
    data() {
        return {
            serializers: {
                types: {
                    codeBlock: BlockContentCode,
                    image: BlockContentImage
                }
            }
        }
    },
    computed: {
        createdAt() {
            let createdAtDate = new Date(this.$data._createdAt)
            return createdAtDate.toLocaleString()
        },
        sanity() {
            return {
                id: process.env.SANITY_ID,
                dataset: process.env.SANITY_DATASET
            }
        },
        type() {
            return getPostType(this.postType.type)
        }
    }
}
</script>
