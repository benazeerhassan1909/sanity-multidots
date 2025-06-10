

const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Prevents creation and deletion
    groups: [
        { name: 'generalSettings', title: 'General' },
        { name: 'headerSettings', title: 'Header' },
        { name: 'footerSettings', title: 'Footer' },
        { name: 'pageSettings', title: 'Pages' },
        { name: 'jobSettings', title: 'Job' },
    ],
    fields: [
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            group: 'generalSettings',
        },
        {
            name: 'logo',
            title: 'Site Logo',
            type: 'image',
            options: { hotspot: true },
            group: 'generalSettings',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
                {
                    name: 'width',
                    title: 'Image Width',
                    type: 'number',
                },
                {
                    name: 'height',
                    title: 'Image Height',
                    type: 'number',
                },
            ],
        },
        {
            name: 'header',
            title: 'Header Settings',
            type: 'object',
            group: 'headerSettings',
            fields: [
                {
                    name: 'menuItems',
                    title: 'Menu Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'title', title: 'Title', type: 'string' },
                                { name: 'url', title: 'URL', type: 'string' },
                                {
                                    name: 'subMenu',
                                    title: 'Sub Menu',
                                    type: 'array',
                                    of: [
                                        {
                                            type: 'object',
                                            fields: [
                                                { name: 'title', title: 'Title', type: 'string' },
                                                { name: 'url', title: 'URL', type: 'string' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'footer',
            title: 'Footer Settings',
            type: 'object',
            group: 'footerSettings',
            fields: [
                {
                    name: 'address',
                    title: 'Address',
                    type: 'string',
                },
                {
                    name: 'phone',
                    title: 'Phone',
                    type: 'string',
                },
                {
                    name: 'footerText',
                    title: 'Footer Text',
                    type: 'string',
                },
                {
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
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: 'Facebook', value: 'fab fa-facebook-f' },
                                            { title: 'GitHub', value: 'fab fa-github' },
                                            { title: 'Twitter', value: 'fab fa-twitter' },
                                            { title: 'Instagram', value: 'fab fa-instagram' },
                                            { title: 'LinkedIn', value: 'fab fa-linkedin-in' },
                                            { title: 'YouTube', value: 'fab fa-youtube' },
                                            { title: 'WordPress', value: 'fab fa-wordpress-simple' },
                                        ],
                                    },
                                },
                                {
                                    name: 'url',
                                    title: 'URL',
                                    type: 'url',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'footermenuItems',
                    title: 'Footer Menu Items',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                { name: 'title', title: 'Title', type: 'string' },
                                { name: 'url', title: 'URL', type: 'string' },
                                {
                                    name: 'subMenu',
                                    title: 'Sub Menu',
                                    type: 'array',
                                    of: [
                                        {
                                            type: 'object',
                                            fields: [
                                                { name: 'title', title: 'Title', type: 'string' },
                                                { name: 'url', title: 'URL', type: 'string' },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'footerLogo1',
                    title: 'Footer Logo 1',
                    type: 'image',
                    options: { hotspot: true },
                },
                {
                    name: 'footerLogo2',
                    title: 'Footer Logo 2',
                    type: 'image',
                    options: { hotspot: true },
                },
                {
                    name: 'footerLogo3',
                    title: 'Footer Logo 3',
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        },
        // Additional general settings
        {
            name: 'generalSettings',
            title: 'General Settings',
            type: 'object',
            group: 'generalSettings',
            fields: [
                {
                    name: 'favicon',
                    title: 'Favicon',
                    type: 'image',
                    options: { hotspot: true },
                },
                {
                    name: 'seoDescription',
                    title: 'SEO Description',
                    type: 'text',
                },
            ],
        },
    ],

}


export default siteSettings;
