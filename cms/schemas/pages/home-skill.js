export default {
    title: 'Skill',
    name: 'page-home-skill',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: Rule =>
                Rule.required()
                    .min(0)
                    .max(10)
        }
    ]
}
