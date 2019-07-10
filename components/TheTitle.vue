<template>
    <div class="w-full bg-blue-secondary text-light px-8 py-12 text-center shadow" id="title">
        <h1 class="text-uppercase text-5xl font-bold" title="title-main">{{ title }}</h1>
        <h4 class="text-uppercase text-xl font-normal" title="title-sub">{{ subtitle }}</h4>
    </div>
</template>

<script>
export default {
    props: ['title', 'subtitle']
}
</script>

<style lang="scss">
@import '~/assets/scss/_colors.scss';

#title {
}
</style>

