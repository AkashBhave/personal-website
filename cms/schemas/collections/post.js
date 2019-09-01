export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
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
            title: 'Post Type',
            name: 'postType',
            type: 'post-type',
            validation: Rule => Rule.required()
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
            project: 'postType.project.title',
            type: 'postType.type',
            media: 'mainImage'
        },
        prepare(selection) {
            const { title, project, type, media } = selection
            return {
                title: title,
                // Show the post type and the project name if there is one
                subtitle:
                    (type
                        ? type.replace(/[a-z]/i, function(letter) {
                              return letter.toUpperCase()
                          })
                        : '') + (project ? ' / ' + project : ''),
                media: media
            }
        }
    }
}
