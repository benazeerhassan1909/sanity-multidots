import { defineType, defineField } from 'sanity'

export const ctaBlockType = defineType({
    name: 'ctaBlock',
    title: 'CTA Block',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Main heading for the CTA',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'text',
            description: 'Optional subheading text',
            rows: 3,
        }),
        defineField({
            name: 'button',
            title: 'Button',
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
            
        }),
        defineField({
            name: 'customBackgroundColor',
            title: 'Custom Background Color',
            type: 'color',
            description: 'Select a custom background color',
            hidden: ({ parent }) => parent?.backgroundColor !== 'custom',
        }),
        defineField({
            name: 'textColor',
            title: 'Text Color',
            type: 'color',
            description: 'Choose a text color that contrasts with the background',
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

