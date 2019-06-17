export default {
    name: 'post',
    title: 'Post',
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
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'project',
            title: 'Project',
            type: 'reference',
            to: { type: 'project' }
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }
    ],

    preview: {
        select: {
            title: 'title',
            project: 'project.title',
            media: 'mainImage'
        },
        prepare(selection) {
            const { title, project, media } = selection
            return {
                title: title,
                subtitle: project,
                media: media
            }
        }
    }
}
