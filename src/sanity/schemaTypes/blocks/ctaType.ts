import { defineType, defineField } from 'sanity'

export const ctaBlockType = defineType({
    name: 'ctaBlock',
    title: 'CTA Block',
    description: 'A block for call to action content',
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
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Main heading for the CTA',
            group: "content",
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            description: 'Optional subheading text',
            rows: 3,
            group: "content",
        }),
        defineField({
            name: 'button',
            title: 'Button',
            group: "content",
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
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'color',
            description: 'Choose a background color for the CTA',
            group: "style",
            options: {
                disableAlpha: true,
            },
            
        }),
        defineField({
            name: 'customBackgroundColor',
            title: 'Custom Background Color',
            type: 'color',
            description: 'Select a custom background color',
            hidden: ({ parent }) => parent?.backgroundColor !== 'custom',
            group: "style",
        }),
        defineField({
            name: 'textColor',
            title: 'Text Color',
            type: 'color',
            description: 'Choose a text color that contrasts with the background',
            group: "style",
        }),
    ],
    preview: {
        select: {
            heading: 'heading',
            subheading: 'subheading',
            media: 'image',
        },
        prepare({ heading, subheading, media }) {
            return {
                title: heading || 'CTA Block',
                subtitle: subheading || 'No subheading',
                media,
            }
        },
    },
})

