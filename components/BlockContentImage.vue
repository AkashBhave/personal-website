<template>
    <div>
        <div v-lazy-container="{selector: 'img'}">
            <img :data-src="imageBlocktoURL(asset)" />
            <div v-if="caption">
                <figcaption class="text-center mt-2 opacity-75 font-light text-lg">{{ caption }}</figcaption>
            </div>
        </div>
    </div>
</template>

<script>
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
            return this.$sanityImage(source)
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/code.scss';
</style>
