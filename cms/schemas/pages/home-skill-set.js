export default {
    title: 'Skill Set',
    name: 'page-home-skill-set',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'page-home-skill' }]
        }
    ]
}
