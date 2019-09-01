export default {
    name: 'page_home',
    title: 'Page (Home)',
    type: 'document',
    fields: [
        {
            title: 'Hero',
            name: 'hero',
            type: 'object',
            fields: [
                {
                    name: 'phrases',
                    title: 'Phrases',
                    type: 'array',
                    of: [{ type: 'string' }]
                },
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ]
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
