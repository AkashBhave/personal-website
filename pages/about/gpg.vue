<template>
    <main>
        <the-title title="GPG" subtitle="My online identification."></the-title>
        <div class="container md:w-2/3 w-full mx-auto px-8 py-12">
            <div class="mb-4">
                <h1 class="text-4xl">Key ID</h1>
                <block-content-code :code="{code: id}" language="plaintext"></block-content-code>
            </div>
            <div class="mb-4">
                <h1 class="text-4xl">Fingerprint</h1>
                <block-content-code :code="{code: fingerprint}" language="plaintext"></block-content-code>
            </div>
            <div class="mb-4">
                <h1 class="text-4xl">Public Key</h1>
                <block-content-code :code="{code: publicKey}" language="plaintext"></block-content-code>
            </div>
        </div>
    </main>
</template>

<script>
import TheTitle from '~/components/TheTitle'
import BlockContentCode from '~/components/BlockContentCode'

export default {
    components: {
        TheTitle,
        BlockContentCode
    },
    asyncData() {
        return require('~/static/_data/page/about.json').gpg
    }
}
</script>

<style lang="scss">
@import '~/assets/scss/code.scss';
</style>
