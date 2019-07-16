export default {
    name: 'page_about',
    title: 'Page (About)',
    type: 'document',
    fields: [
        {
            title: 'GPG Key',
            name: 'gpg',
            type: 'object',
            fields: [
                {
                    name: 'id',
                    title: 'ID',
                    type: 'string'
                },
                {
                    name: 'fingerprint',
                    title: 'Fingerprint',
                    type: 'string'
                },
                {
                    name: 'publicKey',
                    title: 'Public Key',
                    type: 'text'
                }
            ]
        },
        {
            title: 'Main Image',
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}
