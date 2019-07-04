<template>
    <div id="page" class="font-sans flex flex-col h-full text-dark">
        <div class="min-h-screen flex-1 flex flex-col">
            <the-header class="flex-shrink-0"></the-header>
            <nuxt />
        </div>
        <div class="pin-b">
            <the-footer></the-footer>
        </div>
    </div>
</template>

<script>
// Font awesome
require('@fortawesome/fontawesome-free/css/all.css')

import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style lang="scss">
#page {
    min-height: 100vh;
}
</style>

