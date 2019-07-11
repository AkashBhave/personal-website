<template>
    <main id="contact-form">
        <the-title :title="'Contact'" :subtitle="'Get in touch!'"></the-title>
        <form class="lg:w-1/2 w-full container mx-auto px-8 py-12">
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 px-4">
                    <label for="form-first-name">First Name</label>
                    <input class id="form-first-name" type="text" placeholder="John" />
                </div>
                <div class="w-full md:w-1/2 px-4">
                    <label for="form-last-name">Last Name</label>
                    <input id="form-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <label for="form-subject">Subject</label>
                    <input id="form-subject" type="text" placeholder="What's Up?" />
                </div>
            </div>
        </form>
    </main>
</template>

<script>
import TheTitle from '~/components/TheTitle'

export default {
    head() {
        return {
            title: 'Contact | ' + process.env.SITE_TITLE
        }
    },
    components: {
        TheTitle
    }
}
</script>

<style lang="scss" scoped>
#contact-form {
    label {
        @apply block uppercase tracking-wide text-blue-tertiary font-bold mb-2;
    }

    input {
        @apply appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-4 px-4 mb-6 leading-tight;

        &:focus {
            @apply bg-light border-blue-secondary;
        }
    }
}
</style>


