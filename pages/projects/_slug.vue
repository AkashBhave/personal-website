<template>
    <main>
        <div class="page-content">
            <div class="page-header flex flex-wrap mb-4 md:shadow-none shadow">
                <div class="flex flex-col lg:w-2/5 w-full text-center">
                    <nuxt-link :to="'/projects'">
                        <div
                            class="flex-1 w-full bg-blue-secondary text-light font-bold text-uppercase py-4 text-xl shadow"
                        >
                            <i class="fas fa-arrow-left mr-2"></i>
                            <span>Projects</span>
                        </div>
                    </nuxt-link>
                    <div class="flex flex-1 flex-col py-12 px-8 justify-center h-full">
                        <div class="mb-2">
                            <span
                                v-for="link in links"
                                :key="link.url"
                                class="inline-block mb-2 mx-2 w-auto text-xl font-light text-light py-2 px-4 rounded bg-highlight"
                            >
                                <a :href="link.url">
                                    <i class="mr-2" :class="link.iconName"></i>
                                    <span>{{ link.title }}</span>
                                </a>
                            </span>
                        </div>
                        <h1 class="page-title md:text-5xl text-4xl mb-4">{{ title }}</h1>
                        <h3 class="text-xl mb-2">
                            By
                            <span class="italic text-blue-tertiary">Akash Bhave</span>
                        </h3>
                        <h3 class="mb-4">
                            Updated on
                            <span class="font-mono text-blue-tertiary">{{ createdAt }}</span>
                        </h3>
                        <div class>
                            <span
                                v-for="keyword in keywords"
                                :key="keyword"
                                class="mb-2 inline-block mx-2 font-light p-2 text-light bg-blue-secondary rounded"
                            >{{ keyword }}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center lg:w-3/5 w-full bg-gray-200 border">
                    <div class="mx-auto">
                        <div v-if="mainImage">
                            <block-content
                                :blocks="mainImage"
                                :serializers="serializers"
                                :projectId="sanity.id"
                                :dataset="sanity.dataset"
                            />
                        </div>
                        <div class="h-full flex items-center text-blue-secondary p-8" v-else>
                            <i class="text-250px far fa-file"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-body container mx-auto p-8 md:w-2/3 w-full">
                <block-content
                    :blocks="description"
                    :serializers="serializers"
                    :projectId="sanity.id"
                    :dataset="sanity.dataset"
                />
            </div>

            <div class="container mx-auto p-8 md:w-2/3 w-full">
                <div v-for="post in relatedPosts" :key="post._id">{{ post.title }}</div>
            </div>
        </div>
    </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import BlockContentCode from '~/components/BlockContentCode'
import BlockContentImage from '~/components/BlockContentImage'

export default {
    validate(context) {
        try {
            let data = require(`~/static/_data/projects/${context.params.slug}`)
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
        let projectData = require(`~/static/_data/projects/${context.params.slug}`)
        if (!projectData.mainImage) {
            projectData.mainImage = false
        }

        // Get posts that refer to this project
        let postsArray = require('~/static/_data/blog/_.json')
        let relatedPostsArray = []
        postsArray.forEach(post => {
            if (
                post.postType.type == 'project' &&
                post.postType.project._ref == projectData._id
            ) {
                relatedPostsArray.push(post)
            }
        })

        projectData['relatedPosts'] = relatedPostsArray
        return projectData
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
        },
        sanity() {
            return {
                id: process.env.SANITY_ID,
                dataset: process.env.SANITY_DATASET
            }
        }
    }
}
</script>
