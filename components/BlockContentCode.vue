<template>
    <div class="-my-8">
        <pre v-highlightjs="code.code">
            <p
    v-if="language"
    class="text-dark relative hljs-language bg-light font-light px-2 py-1 uppercase border-2 border-blue-secondary font-sans"
>{{ language }}</p>
            <code :class="language"></code>
        </pre>
    </div>
</template>

<script>
export default {
    props: {
        code: {
            type: Object
        },
        language: {
            type: String
        }
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/code.scss';

.hljs-language {
    top: 48px;
    float: right;
    font-size: 0.9em !important;

    &:hover {
        opacity: 0.25;
        transition: 0.3s all ease-out;
    }
    &:not(:hover) {
        opacity: 0.75;
    }
}
</style>
