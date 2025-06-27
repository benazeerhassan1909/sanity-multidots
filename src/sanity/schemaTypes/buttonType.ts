import { defineType, defineField } from 'sanity'


export const buttonType = defineType({
    name: 'button',
    title: 'Button',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                }),
            description: 'Can be relative (/about) or absolute (https://...)',
        }),
        // defineField({
        //     name: 'style',
        //     title: 'Style',
        //     type: 'string',
        //     options: {
        //         list: [
        //             { title: 'Primary', value: 'primary' },
        //             { title: 'Secondary', value: 'secondary' },
        //             { title: 'Outline', value: 'outline' },
        //             { title: 'Text Link', value: 'text' },
        //         ],
        //         layout: 'radio',
        //     },
        //     initialValue: 'primary',
        // }),
        defineField({
            name: 'openInNewTab',
            title: 'Open in new tab?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            text: 'text',
            link: 'link',
            style: 'style',
        },
        prepare({ text, link, style }) {
            return {
                title: text,
                subtitle: `${link} (${style})`,
            }
        },
    },
})