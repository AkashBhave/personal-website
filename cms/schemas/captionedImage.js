export default {
    name: 'captionedImage',
    title: 'Captioned Image',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string'
        }
    ]
}
