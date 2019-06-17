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
                    <p class="md:text-3xl text-2xl italic">
                        <vue-typer
                            class="break-normal whitespace-normal"
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
                    id="hero-picture"
                    class="flex flex-col justify-end md:w-1/2 w-full bg-blue-primary bg-local bg-contain bg-no-repeat bg-center"
                ></div>
            </div>
            <div
                id="hero-scroll"
                class="relative h-16 w-16 bg-blue-secondary opacity-100 shadow-md cursor-pointer flex justify-center items-center"
            >
                <i class="fas fa-chevron-down text-3xl text-white"></i>
            </div>
        </section>
    </main>
</template>

<script>
if (process.browser) {
    var VueTyper = require('vue-typer').VueTyper
}
require('@fortawesome/fontawesome-free/css/all.css')

export default {
    head() {
        return {
            title: 'Home | Akash Bhave'
        }
    },
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
#hero-picture {
    background-image: url('~assets/pages/home/me.png');
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
