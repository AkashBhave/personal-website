<template>
    <pre v-highlightjs="code">
        <code :class="language"></code>
    </pre>
</template>

<script>
export default {
    props: {
        code: {
            type: String
        },
        language: {
            type: String
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/code.scss';
</style>
