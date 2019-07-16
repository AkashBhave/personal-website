<template>
    <main class="h-full">
        <section class="h-full">
            <div class="flex flex-wrap-reverse h-full">
                <div
                    class="flex flex-col md:justify-center justify-start md:w-1/2 w-full bg-white p-8"
                >
                    <p class="font-bold font-serif md:text-5xl text-4xl">Hello.</p>
                    <p class="md:text-4xl text-3xl">
                        My name is
                        <span class="font-bold">Akash</span>, and I'm a
                    </p>
                    <div class="md:text-3xl text-2xl italic">
                        <no-ssr>
                            <vue-typer
                                class="inline break-normal whitespace-normal"
                                :text="hero.phrases"
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
                            ></vue-typer>
                        </no-ssr>
                    </div>
                </div>
                <div
                    id="hero-picture"
                    class="flex flex-col justify-end md:w-1/2 w-full bg-blue-primary bg-local bg-contain bg-no-repeat bg-center"
                    :style="{ 'background-image': 'url(' + $sanityImage(hero.picture) + ')' }"
                ></div>
            </div>
            <div
                id="hero-scroll"
                class="relative h-16 w-16 bg-blue-secondary opacity-100 shadow cursor-pointer flex justify-center items-center"
            >
                <i class="fas fa-chevron-down text-3xl text-light"></i>
            </div>
        </section>
    </main>
</template>

<script>
require('@fortawesome/fontawesome-free/css/all.css')

if (process.browser) {
    var VueTyper = require('vue-typer').VueTyper
}

export default {
    head() {
        return {
            title: 'Home | ' + process.env.SITE_TITLE
        }
    },
    components: {
        VueTyper
    },
    asyncData(context) {
        let data = require('~/static/_data/page/home.json')
        data.hero.phrases.forEach(function(part, index) {
            // Add a period to each phrase
            this[index] = this[index] + '.'
        }, data.hero.phrases)

        return data
    }
}
</script>

<style lang="scss" scoped>
main {
    // FIXME: Use a better method to fill height
    height: calc(100vh - 5rem);
}
#hero-picture {
    background-blend-mode: overlay;
}
#hero-scroll {
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>

<style lang="scss">
@import '~/assets/scss/_colors.scss';
.vue-typer .custom.char.selected {
    background-color: $color-primary;
}
.vue-typer .custom.caret {
    width: 3px;
    margin-left: 3px;
}
</style>
