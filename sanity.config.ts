'use client'

import React from 'react';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { resolve } from '@/sanity/presentation/resolve'
import { media } from 'sanity-plugin-media'
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'
import { colorInput } from '@sanity/color-input';
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard'


export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  title: 'Multidots',
  icon: () => React.createElement('img', {
    src: '/mdvip-fav.png',
    alt: 'Multidots Logo',
    width: 24,
    height: 24,
    style: { display: 'block' }
  }),
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ]
    }),
    media(),
    colorInput(),
  ],
  tools: (prev, { currentUser }) => {
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    if (isAdmin) {
      return prev
    }

    return prev.filter((tool) => tool.name !== 'vision')
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((docType) => !['siteSettings'].includes(docType.templateId));
      }
      return prev;
    },
  },
})
const builder = imageUrlBuilder({ projectId, dataset });

interface ImageSource {
  asset: {
    _ref: string;
    _type: string;
  };
}

export const urlFor = (source: ImageSource) => builder.image(source);