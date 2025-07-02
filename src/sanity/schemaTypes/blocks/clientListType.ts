// /schemas/sections/clientList.ts
import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const clientList = defineType({
    name: 'clientList',
    title: 'Client List',
    type: 'object',
    icon: ImagesIcon,
    groups: [
        {
            name: "content",
            title: "Content",
        },
        {
            name: "style",
            title: "Style",
        },
    ],
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            group: "content",
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'color',
            options: {
                disableAlpha: true,
            },
            description: 'Choose a background color for the Client List',
            group: "style",
        }),
        defineField({
            name: 'textColor',
            title: 'Text Color',
            type: 'color',
            description: 'Choose a text color that contrasts with the background',
            group: "style",
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
            group: "content",
            type: 'array',
            of: [
                defineField({
                    name: 'logo',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string',
                        },
                        {
                            name: 'width',
                            title: 'Image Width',
                            type: 'number',
                        },
                        {
                            name: 'height',
                            title: 'Image Height',
                            type: 'number',
                        },
                    ],
                }),
            ],
            
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Client List Block',
                subtitle: 'Client',
            }
        },
    },
})
