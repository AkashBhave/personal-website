export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{ type: 'project-link' }]
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}
