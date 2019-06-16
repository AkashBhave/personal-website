<template>
    <div id="page" class="font-sans flex flex-col">
        <div class="flex-1 flex-grow-0">
            <the-header></the-header>
        </div>
        <div class="flex-1 flex-grow">
            <nuxt/>
        </div>
    </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
    components: {
        TheHeader
    }
}
</script>

<style lang="scss">
#page {
    min-height: 100vh;
}
</style>

