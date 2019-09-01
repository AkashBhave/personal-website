export default {
    name: 'page-home',
    title: 'Page (Home)',
    type: 'document',
    fields: [
        {
            name: 'phrases',
            title: 'Phrases',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'portrait',
            title: 'portrait',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ],
    preview: {
        select: {},
        prepare() {
            return {
                title: 'Page (Home)',
                subtitle: 'Page'
            }
        }
    }
}
