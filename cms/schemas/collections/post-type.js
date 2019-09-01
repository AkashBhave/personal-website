export default {
    title: 'Post Type',
    name: 'post-type',
    type: 'object',
    fields: [
        {
            title: 'Type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'Project', value: 'project' },
                    { title: 'Thought', value: 'thought' },
                    { title: 'Tutorial', value: 'tutorial' }
                ],
                layout: 'radio'
            }
        },
        {
            title: 'Project',
            name: 'project',
            type: 'reference',
            to: [{ type: 'project' }]
        }
    ]
}
