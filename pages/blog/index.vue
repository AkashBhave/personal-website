<template>
    <main>
        <div v-for="post in posts" :key="post._id">{{post.slug}}</div>
    </main>
</template>

<script>
import sanityClient from '~/plugins/sanityClient'

export default {
    asyncData() {
        let postsArray = []

        sanityClient.fetch('*[_type == "post"]').then(posts =>
            posts.forEach(post => {
                postsArray.push(post)
            })
        )

        return {
            posts: postsArray
        }
    }
}
</script>

