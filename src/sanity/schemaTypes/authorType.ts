import { defineType, defineField } from 'sanity'

export const authorType = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility',
                })
            ]
        }),
        defineField({
            name: 'designation',
            title: 'Designation',
            type: 'string',
            description: 'Author job title or role'
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Platform Icon',
                            type: 'image',
                            options: { hotspot: true },
                            validation: Rule => Rule.required(),
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
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: Rule => Rule.required().uri({ scheme: ['http', 'https'] })
                        },
                    ],
                    preview: {
                        select: {
                            url: 'url'
                        },
                        prepare({ url }) {
                            return {
                                title: url
                            }
                        }
                    }
                },
            ],
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            subtitle: 'designation'
        }
    }
})
