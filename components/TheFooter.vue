<template>
    <footer id="footer" class="w-full bg-blue-secondary text-light shadow">
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
                                <i class="fab fa-github fa-fw"></i>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://gitlab.com/AkashBhave">
                                <i class="fab fa-gitlab fa-fw"></i>
                                <span>GitLab</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://keybase.io/akashbhave">
                                <i class="fab fa-keybase fa-fw"></i>
                                <span>Keybase</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/4552814/akashbhave">
                                <i class="fab fa-stack-overflow fa-fw"></i>
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
                                <i class="fab fa-linkedin fa-fw"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/AkashBhave">
                                <i class="fab fa-twitter fa-fw"></i>
                                <span>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.strava.com/athletes/akashbhave">
                                <i class="fab fa-strava fa-fw"></i>
                                <span>Strava</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center mb-2">
                <p class="text-lg">
                    Made with
                    <i class="fab fa-vuejs text-green-300"></i>,
                    <i class="fas fa-coffee text-orange-300"></i>,
                    and most importantly,
                    <i class="fas fa-heart text-red-400"></i>
                </p>
            </div>
            <div class="text-center text-sm opacity-75">
                <a href="https://github.com/AkashBhave/personal-website">
                    <i class="fas fa-code text-purple-200"></i>
                    <span>Source</span>
                </a>
                <span class="mx-1">|</span>
                <a :href="latestCommit.html_url">
                    <i class="fas fa-pen text-purple-200"></i>
                    <span>Revision:</span>
                    <span class="font-mono">{{ latestCommit.sha }}</span>
                </a>
                <span class="mx-1">|</span>
                <a href="https://github.com/AkashBhave/personal-website/commits/master">
                    <i class="fas fa-file-alt text-purple-200"></i>
                    <span>Changelog</span>
                </a>
            </div>
        </div>
    </footer>
</template> 

<script>
export default {
    data() {
        return {
            latestCommit: {
                sha: 'Unknown'
            }
        }
    },
    mounted() {
        let vm = this
        this.$axios
            .$get(
                'https://api.github.com/repos/AkashBhave/personal-website/commits'
            )
            .then(
                response => {
                    vm.latestCommit = response[0]
                },
                error => {
                    console.log(error)
                }
            )
    }
}
</script>

<style lang="scss">
#footer {
    #footer-links li {
        @apply mb-1;

        i {
            @apply mr-1;
        }
    }

    #footer-logo {
        filter: brightness(0.05) invert(1);
    }
}
</style>

