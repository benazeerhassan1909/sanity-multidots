import { defineType, defineField } from 'sanity'

export const imageTextSection = defineType({
    name: 'imageTextSection',
    title: 'Image & Text Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'subTitle',
            type: 'string',
            title: 'Sub Title',
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
            title: 'Description',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'imagePosition',
            type: 'string',
            title: 'Main Image Position',
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
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [{ type: 'button' }],
            description: 'Add one or more buttons',
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
