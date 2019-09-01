import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Post')
                .child(
                    S.documentTypeList('post').defaultOrdering([
                        { field: '_createdAt', direction: 'desc' }
                    ])
                ),
            S.listItem()
                .title('Project')
                .child(
                    S.documentTypeList('project').defaultOrdering([
                        { field: '_createdAt', direction: 'desc' }
                    ])
                ),
            S.listItem()
                .title('Page')
                .child(
                    S.list()
                        .title('Page')
                        .items([
                            S.listItem()
                                .title('Home')
                                .child(
                                    S.editor()
                                        .title('Page (Home)')
                                        .id('page-home')
                                        .schemaType('page-home')
                                        .documentId('page-home')
                                ),
                            S.listItem()
                                .title('About')
                                .child(
                                    S.editor()
                                        .title('Page (About)')
                                        .id('page-about')
                                        .schemaType('page-about')
                                        .documentId('page-about')
                                )
                        ])
                )
        ])
