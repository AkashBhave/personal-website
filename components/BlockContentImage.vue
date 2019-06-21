<template>
    <div>
        <img :src="imageBlocktoURL(asset)">
        <div v-if="caption">
            <figcaption class="text-center mt-2 opacity-75 font-light text-lg">{{ caption }}</figcaption>
        </div>
    </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/plugins/sanity-client'

let builder = imageUrlBuilder(sanityClient)

export default {
    props: {
        asset: {
            type: Object
        },
        caption: {
            type: String
        }
    },
    methods: {
        imageBlocktoURL(source) {
            return builder.image(source)
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/code.scss';
</style>
