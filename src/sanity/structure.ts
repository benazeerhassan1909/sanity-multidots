import type { StructureResolver } from 'sanity/structure'
import { CogIcon } from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Multidots')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
      ),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["siteSettings"].includes(item.getId()!)
      ),    ]
    )
