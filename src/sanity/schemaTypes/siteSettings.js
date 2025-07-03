const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Prevents creation and deletion
    groups: [
        { name: 'generalSettings', title: 'General', default: true },
        { name: 'headerSettings', title: 'Header' },
        { name: 'footerSettings', title: 'Footer' },
        { name: 'pageSettings', title: 'Pages' },
        { name: 'jobSettings', title: 'Job' },
    ],
    fields: [
        // General Settings
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'generalSettings',
            validation: Rule => Rule.required()
        },
        // {
        //     name: 'generalSettings',
        //     title: 'General Settings',
        //     type: 'object',
        //     group: 'generalSettings',
        //     options: { collapsible: true, collapsed: false },
        //     fields: [
        //         {
        //             name: 'favicon',
        //             title: 'Favicon',
        //             type: 'image',
        //             options: { hotspot: true },
        //             validation: Rule => Rule.required(),
        //             fields: [
        //                 {
        //                     name: 'alt',
        //                     type: 'string',
        //                     title: 'Alternative Text',
        //                 },
        //                 {
        //                     name: 'width',
        //                     title: 'Image Width',
        //                     type: 'number'
        //                 },
        //                 {
        //                     name: 'height',
        //                     title: 'Image Height',
        //                     type: 'number'
        //                 },
        //             ]
        //         },
        //         {
        //             name: 'seoDescription',
        //             title: 'SEO Description',
        //             type: 'text',
        //             validation: Rule => Rule.max(160).warning('Should be under 160 characters')
        //         },
        //     ]
        // },

        // Header Settings
        {
            name: 'logo',
            title: 'Site Logo',
            type: 'image',
            options: { hotspot: true },
            group: 'headerSettings',
            validation: Rule => Rule.required(),
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    validation: Rule => Rule.required()
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
            name: 'sanityLogo',
            title: 'Sanity Logo',
            type: 'image',
            options: { hotspot: true },
            group: 'headerSettings',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
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
                {
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                    validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
                }
            ]
        },

        // Footer Settings
        {
            name: 'footer',
            title: 'Footer Settings',
            type: 'object',
            group: 'footerSettings',
            options: { collapsible: true, collapsed: false },
            fields: [
                {
                    name: 'footerLogo',
                    title: 'Footer Logo (optional)',
                    type: 'image',
                    description: 'This logo will be displayed in the footer section of the site.',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string'
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
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                    validation: Rule => Rule.email()
                },
                {
                    name: 'scheduleMeetingTitle',
                    title: 'Schedule Meeting Title',
                    type: 'string',
                    validation: Rule => Rule.max(50)
                },
                {
                    name: 'scheduleMeetingUrl',
                    title: 'Schedule Meeting URL',
                    type: 'url',
                    validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
                },

                // Footer Logos Group
                {
                    name: 'footerLogos',
                    title: 'Footer Partner Logos',
                    type: 'object',
                    options: { collapsible: true, collapsed: true },
                    fields: [
                        {
                            name: 'footerLogo1',
                            title: 'Footer Logo 1',
                            type: 'image',
                            options: { hotspot: true },
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
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'url',
                                    validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
                                }
                            ]
                        },
                        {
                            name: 'footerLogo2',
                            title: 'Footer Logo 2',
                            type: 'image',
                            options: { hotspot: true },
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
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'url',
                                    validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
                                }
                            ]
                        },
                        {
                            name: 'footerLogo3',
                            title: 'Footer Logo 3',
                            type: 'image',
                            options: { hotspot: true },
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
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'url',
                                    validation: Rule => Rule.uri({ scheme: ['http', 'https'] })
                                }
                            ]
                        },
                    ]
                },

                // Address Section
                {
                    name: 'addressSection',
                    title: 'Office Locations',
                    type: 'object',
                    options: { collapsible: true, collapsed: true },
                    fields: [
                        {
                            name: 'locations',
                            title: 'Office Locations',
                            type: 'array',
                            validation: Rule => Rule.min(1).max(5),
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'country',
                                            title: 'Country',
                                            type: 'string',
                                            options: {
                                                list: [
                                                    { title: 'United States', value: 'usa' },
                                                    { title: 'United Kingdom', value: 'uk' }
                                                ],
                                                layout: 'radio'
                                            },
                                            validation: Rule => Rule.required()
                                        },
                                        {
                                            name: 'title',
                                            title: 'Location Title',
                                            type: 'string',
                                            validation: Rule => Rule.required().max(50)
                                        },
                                        {
                                            name: 'address',
                                            title: 'Full Address',
                                            type: 'text',
                                            rows: 3,
                                            validation: Rule => Rule.required()
                                        },
                                        {
                                            name: 'phone',
                                            title: 'Phone Number',
                                            type: 'string',
                                            // validation: Rule => Rule.custom((phone, context) => {
                                            //     const country = context.parent.country;
                                            //     if (country === 'usa' && !/^\+1\s\d{3}\s\d{3}\s\d{4}$/.test(phone)) {
                                            //         return 'US format: +1 XXX XXX XXXX';
                                            //     }
                                            //     if (country === 'uk' && !/^\+44\s\d{2}\s\d{4}\s\d{4}$/.test(phone)) {
                                            //         return 'UK format: +44 XX XXXX XXXX';
                                            //     }
                                            //     return true;
                                            // })
                                        }
                                    ],
                                    preview: {
                                        select: {
                                            title: 'title',
                                            country: 'country',
                                            phone: 'phone'
                                        },
                                        prepare({ title, country, phone }) {
                                            return {
                                                title: title,
                                                subtitle: `${country.toUpperCase()} • ${phone}`
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },

                // Footer Menu
                {
                    name: 'footermenuItems',
                    title: 'Footer Menu Items',
                    type: 'array',
                    validation: Rule => Rule.max(10),
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: 'title',
                                    title: 'Title',
                                    type: 'string',
                                    validation: Rule => Rule.required().max(30)
                                },
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'string',
                                    validation: Rule => Rule.required()
                                },
                                {
                                    name: 'newTab',
                                    title: 'Open in New Tab',
                                    type: 'boolean'
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'title',
                                    url: 'url'
                                },
                                prepare({ title, url }) {
                                    return {
                                        title: title,
                                        subtitle: url
                                    }
                                }
                            }
                        },
                    ],
                },

                // Copyright
                {
                    name: 'copyrrightText',
                    title: 'Copyright Text',
                    type: 'string',
                    validation: Rule => Rule.max(100)
                },

                // Social Links
                {
                    name: 'socialLinks',
                    title: 'Social Links',
                    type: 'array',
                    validation: Rule => Rule.max(5),
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
                }
            ]
        },

        // Page Settings
        {
            name: "homePage",
            title: "Home Page Reference",
            type: "reference",
            to: [{ type: "page" }],
            group: 'pageSettings',
            validation: Rule => Rule.required()
        }
    ]
}

export default siteSettings;