import { defineField, defineType } from 'sanity'

export const listType = defineType({
    name: 'List',
    title: 'List',
    type: 'object',
    fields: [
        defineField({
            name: 'listtitle',
            title: 'List Title',
            type: 'string',
        }),
        defineField({
            name: 'listdescription',
            title: 'List Description',
            type: 'text',
        }),
        defineField({
            name: "lists",
            title: "Lists",
            type: "array",
            of: [
                defineField({
                    name: "listItem",
                    title: "List Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "list",
                            title: "List",
                            type: "string",
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 3
                        }),
                        defineField({
                            name: "icon",
                            title: "Icon",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                defineField({
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative Text',
                                }),
                                defineField({
                                    name: 'width',
                                    title: 'Image Width',
                                    type: 'number'
                                }),
                                defineField({
                                    name: 'height',
                                    title: 'Image Height',
                                    type: 'number'
                                }),
                            ]

                        }),
                       
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "listtitle",
        },
        prepare({ title }) {
            return {
                title: title ?? "List Block",
            };
        },
    },
})
