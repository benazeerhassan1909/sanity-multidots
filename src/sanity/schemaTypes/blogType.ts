import { defineType } from 'sanity'

// schemas/post.js
export const blogType = defineType({
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            description: 'Short description for SEO and previews',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility',
                    options: {
                        isHighlighted: true
                    }
                }
            ]
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text'
                        }
                    ]
                },
            ],
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    description: 'Title for search engines (optional)'
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    description: 'Description for search engines (optional)'
                },
                {
                    name: 'keywords',
                    title: 'Keywords',
                    type: 'array',
                    of: [{ type: 'string' }],
                    options: {
                        layout: 'tags'
                    }
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
            subtitle: 'description'
        },
       
    }
})
