import { defineLocations, PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
    locations: {
        post: defineLocations({
            select: {
                title: 'title',
                slug: 'slug.current',
            },
            resolve: (value) => {
                if (!value) return null;
                return {
                    title: value.title,
                    slug: value.slug,
                };
            },
        }),
    },
}