<template>
    <footer id="footer" class="w-full bg-blue-secondary text-light">
        <div class="container p-8 md:w-2/3 w-full mx-auto">
            <div class="flex flex-col text-center mb-4">
                <img
                    id="footer-logo"
                    type="image/svg+xml"
                    class="h-24 px-6 py-2"
                    src="~/assets/brand/logo.svg"
                    alt
                />
                <div class="py-2 text-lg">
                    <span>Copyright</span>
                    <i class="far fa-copyright"></i>
                    <span class="font-mono">2019</span>
                    <span class="font-bold">Akash Bhave.</span>
                    <span>All rights reserved.</span>
                </div>
            </div>
            <div id="footer-links" class="flex flex-wrap text-left mb-4">
                <div class="md:w-1/3 w-full md:mb-0 mb-4">
                    <h3 class="uppercase text-xl opacity-75 mb-1">Menu</h3>
                    <ul class="text-lg">
                        <li>
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">About</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Projects</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Blog</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">Contact</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="md:w-1/3 w-full md:mb-0 mb-4">
                    <h3 class="uppercase text-xl opacity-75 mb-1">Online</h3>
                    <ul class="text-lg">
                        <li>
                            <a href="https://github.com/AkashBhave">
                                <i class="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://gitlab.com/AkashBhave">
                                <i class="fab fa-gitlab"></i>
                                <span>GitLab</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://keybase.io/akashbhave">
                                <i class="fab fa-keybase"></i>
                                <span>Keybase</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/4552814/akashbhave">
                                <i class="fab fa-stack-overflow"></i>
                                <span>Stack Overflow</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="md:w-1/3 w-full md:mb-0 mb-4">
                    <h3 class="uppercase text-xl opacity-75 mb-1">Social</h3>
                    <ul class="text-lg">
                        <li>
                            <a href="https://www.linkedin.com/in/akashbbhave/">
                                <i class="fab fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/AkashBhave">
                                <i class="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.strava.com/athletes/akashbhave">
                                <i class="fab fa-strava"></i>
                                <span>Strava</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center">
                <p class="text-lg">
                    Made with
                    <i class="fab fa-vuejs text-green-300"></i>,
                    <i class="fas fa-code text-purple-300"></i>,
                    and most importantly,
                    <i class="fas fa-heart text-red-400"></i>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
#footer {
    #footer-links i {
        @apply mr-1;
    }

    #footer-logo {
        filter: brightness(0.05) invert(1);
    }
}
</style>

