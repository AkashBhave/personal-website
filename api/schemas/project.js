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
            name: 'image',
            title: 'Image',
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
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'iconName',
                            title: 'Icon Name (Font Awesome 5)',
                            type: 'string'
                        },
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string'
                        },
                        {
                            name: 'url',
                            title: 'Link',
                            type: 'url'
                        }
                    ]
                }
            ]
        }
    ]
}
