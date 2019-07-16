import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/plugins/sanity-client'
let builder = imageUrlBuilder(sanityClient)

export default ({ app }, inject) => {
    inject('sanityImage', asset => {
        return builder.image(asset)
    })
}
