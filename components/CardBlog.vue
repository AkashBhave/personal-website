<template>
    <div class="flex flex-col justify-between cursor-pointer shadow border-standard h-full">
        <nuxt-link :to="'/blog/' + post.slug.current">
            <no-ssr>
                <div class="post-image" :class="{ hidden: hideImage }">
                    <div v-if="post.mainImage">
                        <img class="w-full bg-gray-300" :src="image(post.mainImage)" alt srcset />
                    </div>
                    <div class="text-center bg-gray-200 text-blue-primary p-8" v-else>
                        <i class="text-200px far fa-file"></i>
                    </div>
                </div>
            </no-ssr>
            <div class="p-8 flex flex-col content-start">
                <h3 class="font-serif font-bold text-3xl -mb-2 break-words">{{post.title}}</h3>
                <h3 class="text-md font-light mt-4">
                    Published on
                    <span
                        class="font-mono text-blue-tertiary"
                    >{{ new Date(post._createdAt).toLocaleString() }}</span>
                </h3>
                <div
                    class="w-auto mr-auto text-md font-light text-light py-2 px-4 mt-4 rounded"
                    :class="getPostType(post.postType.type).color"
                >
                    <i class="mr-2" :class="getPostType(post.postType.type).icon"></i>
                    <span>{{ getPostType(post.postType.type).name }}</span>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
import getPostType from '~/plugins/post-type'

export default {
    props: {
        post: Object,
        hideImage: Boolean
    },
    methods: {
        image(source) {
            if (process.client) {
                let windowScale = Math.round(window.innerWidth / 3)
                return this.$sanityImage(source)
                    .width(windowScale)
                    .height(Math.round((windowScale * 9) / 16))
            }
        },
        getPostType(type) {
            return getPostType(type)
        }
    }
}
</script>

