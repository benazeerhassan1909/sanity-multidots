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
                    name: "list",
                    title: "List",
                    type: "string",
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            return {
                title: title ?? "List Block",
            };
        },
    },
})
