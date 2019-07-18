<template>
    <main>
        <the-title title="About" subtitle="Who am I?"></the-title>
        <div class="mx-8 my-12">
            <div class="flex flex-wrap container mx-auto md:w-2/3 w-full">
                <div class="md:w-1/3 w-full flex md:justify-end justify-center md:mb-0 mb-8">
                    <div class="md:w-full w-2/3">
                        <img
                            class="shadow border"
                            :src="$sanityImage(mainImage).width(700).height(700)"
                            alt
                        />
                    </div>
                </div>
                <div class="style-normal md:w-2/3 w-full flex md:justify-start md:ml-8 md:-mr-8">
                    <block-content
                        :blocks="description"
                        :serializers="serializers"
                        :projectId="sanity.id"
                        :dataset="sanity.dataset"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import BlockContentCode from '~/components/BlockContentCode'
import BlockContentImage from '~/components/BlockContentImage'
import TheTitle from '~/components/TheTitle'

export default {
    head() {
        return {
            title: 'About | ' + process.env.SITE_TITLE
        }
    },
    components: {
        TheTitle,
        BlockContent,
        BlockContentCode
    },
    data() {
        return {
            serializers: {
                types: {
                    codeBlock: BlockContentCode,
                    image: BlockContentImage
                }
            },
            sanity: {
                id: process.env.SANITY_ID,
                dataset: process.env.SANITY_DATASET
            }
        }
    },
    asyncData(context) {
        return require('~/static/_data/page/about.json')
    }
}
</script>

