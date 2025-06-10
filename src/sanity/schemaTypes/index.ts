import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import siteSettings from './siteSettings'
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { heroType } from "./blocks/heroType";



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    siteSettings,
    pageType,
    pageBuilderType,
    heroType
  ],
}
