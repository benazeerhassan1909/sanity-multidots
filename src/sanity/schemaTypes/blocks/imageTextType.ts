import { defineType, defineField } from 'sanity'

export const imageTextSection = defineType({
    name: 'imageTextSection',
    title: 'Image & Text Section',
    type: 'object',
    groups: [
        {
            name: "content",
            title: "Content",
        },
        {
            name: "image",
            title: "Image",
        },
        {
            name: "button",
            title: "Button",
        },
        {
            name: "style",
            title: "Style",
        },
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            group: "content",
        }),
        defineField({
            name: 'subTitle',
            type: 'string',
            title: 'Sub Title',
            group: "content",
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
            title: 'Description',
            group: "content",
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            group: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
                {
                    name: 'width',
                    title: 'Image Width',
                    type: 'number'
                },
                {
                    name: 'height',
                    title: 'Image Height',
                    type: 'number'
                },
            ]
        }),
        defineField({
            name: 'imagePosition',
            type: 'string',
            title: 'Main Image Position',
            group: "style",
            options: {
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
            },
            initialValue: 'right',
        }),
        defineField({
            name: 'button',
            title: 'Button',
            group: "button",
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Button Text',
                    type: 'string',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'link',
                    title: 'Link',
                    type: 'url',
                    validation: (Rule) =>
                        Rule.uri({
                            allowRelative: true,
                            scheme: ['https', 'http', 'mailto', 'tel'],
                        }).required(),
                    description: 'Can be relative (/about) or absolute (https://...)',
                }),
                defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab?',
                    type: 'boolean',
                    initialValue: false,
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ }) {
            return {
                title:  "Image Text Block",
            };
        },
    },
})
