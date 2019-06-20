<template>
    <main class="flex flex-wrap justify-center">
        <div
            v-for="post in posts"
            :key="post._id"
            class="w-3/8 p-4 m-8 overflow-hidden shadow-md border"
        >
            <h3 class="font-serif font-bold text-3xl">{{post.title}}</h3>
            <nuxt-link
                class="text-2xl"
                :to="'/blog/' + post.slug.current"
            >akashbhave.com/blog/{{post.slug.current}}</nuxt-link>
        </div>
    </main>
</template>

<script>
export default {
    head() {
        return {
            title: 'Blog | ' + process.env.SITE_TITLE
        }
    },
    async asyncData(context) {
        return { posts: require('~/static/_data/blog/_.json') }
    }
}
</script>

