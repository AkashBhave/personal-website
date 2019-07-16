<template>
    <main>
        <the-title title="About" subtitle="Who am I?"></the-title>
        <img :src="$sanityImage(mainImage).width(200).height(200)" alt />
        <div class="container md:w-2/3 w-full mx-auto px-8 py-12">Content</div>
    </main>
</template>

<script>
import TheTitle from '~/components/TheTitle'

export default {
    head() {
        return {
            title: 'About | ' + process.env.SITE_TITLE
        }
    },
    components: {
        TheTitle
    },
    asyncData(context) {
        return require('~/static/_data/page/about.json')
    }
}
</script>

