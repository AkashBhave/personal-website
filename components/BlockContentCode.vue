<template>
    <pre v-highlightjs="code.code">
        <code :class="codeLanguage"></code>
    </pre>
</template>

<script>
export default {
    props: {
        code: {
            type: Object
        },
        codeLanguage: {
            type: String
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/code.scss';
</style>
