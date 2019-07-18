<template>
    <div class="flex flex-col items-center justify-center text-center py-12 px-8">
        <div class="my-4">
            <div class="text-highlight text-5xl">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="text-blue-tertiary">
                <h1 class="text-4xl font-bold">Whoops.</h1>
                <h2 class="text-3xl">An error occurred.</h2>
            </div>
        </div>
        <div class="my-4">
            <nuxt-link class="text-xl text-blue-primary" to="/">
                <i class="fas fa-arrow-left mr-2"></i>
                <span>Home</span>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

