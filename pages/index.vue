<template>
    <section class="h-full">
        <div class="flex flex-wrap-reverse h-full">
            <div class="flex flex-col justify-center md:w-1/2 w-full bg-white p-8">
                <p class="font-bold font-serif text-5xl">Hello.</p>
                <p class="text-4xl">
                    My name is
                    <span class="font-bold">Akash</span>, and I'm a
                </p>
                <p class="text-4xl italic">
                    <vue-typer
                        :text="meKeywords"
                        :repeat="Infinity"
                        :shuffle="true"
                        initial-action="typing"
                        :pre-type-delay="70"
                        :type-delay="60"
                        :pre-erase-delay="1500"
                        :erase-delay="250"
                        erase-style="select-all"
                        :erase-on-complete="false"
                        caret-animation="smooth"
                    ></vue-typer>.
                </p>
            </div>
            <div
                id="home-picture"
                class="flex flex-col justify-end md:w-1/2 w-full bg-blue-primary bg-local bg-contain bg-no-repeat bg-center"
            ></div>
        </div>
        <div>More content.</div>
    </section>
</template>

<script>
if (process.browser) {
    var VueTyper = require('vue-typer').VueTyper
}

export default {
    components: {
        VueTyper
    },
    data() {
        return {
            meKeywords: [
                'high-school student',
                'UI/UX designer',
                'web developer',
                'machine learning enthusiast',
                'amateur cyclist'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_colors.scss';

#home-picture {
    background-image: url('~assets/pages/home/me.png');
    background-blend-mode: overlay;
}
</style>
