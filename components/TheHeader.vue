<template>
    <header
        id="header"
        class="md:h-20 h-auto md:px-16 px-6 bg-white flex flex-wrap items-center md:py-0 py-6 font-sans w-full border-b-2 border-blue-secondary shadow"
    >
        <label for="menu-toggle" class="md:hidden block cursor-pointer">
            <svg
                class="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
            >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:items-center md:w-auto w-full mx-auto uppercase" id="menu">
            <nav>
                <ul
                    class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
                >
                    <li class="md:hidden block hover:text-blue-secondary">
                        <nuxt-link class="md:p-4 py-3 px-0 block" to="/">Home</nuxt-link>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <nuxt-link class="md:p-4 py-3 px-0 block" to="/projects">Projects</nuxt-link>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <nuxt-link class="md:p-4 py-3 px-0 block" to="/blog">Blog</nuxt-link>
                    </li>
                    <li class="md:block hidden">
                        <nuxt-link to="/">
                            <img class="h-10 px-6 py-1" src="~/assets/brand/logo.svg" alt srcset />
                        </nuxt-link>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <nuxt-link class="md:p-4 py-3 px-0 block" to="/about">About</nuxt-link>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <nuxt-link class="md:p-4 py-3 px-0 block md:mb-0 mb-2" to="/contact">Contact</nuxt-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/_colors.scss';

#header {
    transition: 0.3s all;

    #menu-toggle:checked + #menu {
        display: block;
    }

    .nuxt-link-active {
        @apply text-blue-secondary;
    }
}
</style>

