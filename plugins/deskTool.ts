import {deskTool} from 'sanity/desk'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default deskTool({
  structure: (S, context) => {
    return S.list()
      .title('Content')
      .items([
        S.divider(),
        S.listItem()
          .title('Globals Settings')
          .icon(() => '🌎')
          .child(S.documentTypeList('global').title('Content')),
        S.listItem()
          .title('Categories')
          .icon(() => '📁')
          .child(S.documentTypeList('category').title('Categories')),
        S.divider(),
        orderableDocumentListDeskItem({type: 'film', title: 'Films', S, context}),
        S.divider(),
        S.listItem()
          .title('About Page')
          .icon(() => '🤷🏻‍♂️')
          .child(S.documentTypeList('aboutpage').title('Content')),
        S.listItem()
          .title('BTS Page')
          .icon(() => '📷')
          .child(S.documentTypeList('btspage').title('Content')),
        S.listItem()
          .title('Contact Page (Deprecated)')
          .icon(() => '📞')
          .child(S.documentTypeList('contactPage').title('Content')),
        S.listItem()
          .title('Home Page')
          .icon(() => '🏠')
          .child(S.documentTypeList('homepage').title('Content')),
        S.listItem()
          .title('Projects Page')
          .icon(() => '🐙')
          .child(S.documentTypeList('projectspage').title('Content')),
        S.listItem()
          .title('Reels Page')
          .icon(() => '🎞️')
          .child(S.documentTypeList('reels').title('Content')),
        S.listItem()
          .title('Misc. Pages')
          .icon(() => '📄')
          .child(S.documentTypeList('page').title('Content')),
        S.divider(),
      ])
  },
})
