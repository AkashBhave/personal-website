import S from '@sanity/desk-tool/structure-builder'

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Posts')
                .child(
                    S.documentTypeList('post').defaultOrdering([
                        { field: '_createdAt', direction: 'desc' }
                    ])
                ),
            S.listItem()
                .title('Projects')
                .child(
                    S.documentTypeList('project').defaultOrdering([
                        { field: '_createdAt', direction: 'desc' }
                    ])
                ),
            S.listItem()
                .title('Pages')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('Home')
                                .child(
                                    S.editor()
                                        .title('Page (Home)')
                                        .id('page_home')
                                        .schemaType('page_home')
                                        .documentId('page_home')
                                )
                        ])
                )
        ])
