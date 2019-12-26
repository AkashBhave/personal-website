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
            title: 'Portrait',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'skillSets',
            title: 'Skill Sets',
            type: 'array',
            of: [{ type: 'page-home-skill-set' }]
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
