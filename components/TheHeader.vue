<template>
    <header
        id="header"
        class="md:px-16 px-6 bg-white flex flex-wrap items-center md:py-0 py-4 font-sans w-full border-b-4 border-blue-secondary"
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
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle">

        <div class="hidden md:flex md:items-center md:w-auto w-full mx-auto uppercase" id="menu">
            <nav>
                <ul
                    class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
                >
                    <li class="hover:text-blue-secondary">
                        <a class="md:p-4 py-3 px-0 block" href="#">Projects</a>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <a class="md:p-4 py-3 px-0 block" href="#">Blog</a>
                    </li>
                    <li class="md:block hidden">
                        <a href="#">
                            <img class="h-10 px-6 py-1" src="~/assets/brand/logo.svg" alt srcset>
                        </a>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <a class="md:p-4 py-3 px-0 block" href="#">About</a>
                    </li>
                    <li class="hover:text-blue-secondary">
                        <a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact</a>
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
}
</style>

