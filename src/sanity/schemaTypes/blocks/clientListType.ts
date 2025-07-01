// /schemas/sections/clientList.ts
import { defineType, defineField } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export const clientList = defineType({
    name: 'clientList',
    title: 'Client List',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'color',
            options: {
                disableAlpha: true,
            },
        }),
        defineField({
            name: 'textColor',
            title: 'Text Color',
            type: 'color',
            description: 'Choose a text color that contrasts with the background',
        }),
        defineField({
            name: 'logos',
            title: 'Logos',
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
