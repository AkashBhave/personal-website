export default {
    title: 'GPG Info',
    name: 'page-about-gpg',
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
}
