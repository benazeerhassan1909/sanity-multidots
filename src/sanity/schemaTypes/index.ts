import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import siteSettings from './siteSettings'
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { heroType } from "./blocks/heroType";
import { seoType } from './seoType';
import { listType } from './blocks/listType';
import { ctaBlockType } from './blocks/ctaType';
import { imageTextSection } from './blocks/imageTextType';
import { clientList } from './blocks/clientListType';
import { featuresType } from './blocks/featureType';
import { blogType } from './blogType';
import { categoryType } from './categoryType';
import { authorType } from './authorType';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    siteSettings,
    pageType,
    pageBuilderType,
    heroType,
    seoType,
    listType,
    ctaBlockType,
    imageTextSection,
    clientList,
    featuresType,
    blogType,
    authorType,
    categoryType

  ],
}
