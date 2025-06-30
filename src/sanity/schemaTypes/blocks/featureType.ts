import { defineField, defineType } from "sanity";

export const featuresType = defineType({
    name: "features",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "subTitle",
            title: "Sub Title",
            type: "string",
        }),
        defineField({
            name: "features",
            type: "array",
            of: [
                defineField({
                    name: "feature",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            type: "string",
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "text",
                            type: "text",
                            rows: 3,
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "icon",
                            type: "image",
                            options: { hotspot: true },
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
                                    type: 'number',
                                },
                                {
                                    name: 'height',
                                    title: 'Image Height',
                                    type: 'number',
                                },
                            ],
                        }),
                    ],
                    preview: {
                        select: {
                            title: "title",
                            media: "icon"
                        },
                        prepare({ title, media }) {
                            return {
                                title: title || "Untitled Feature",
                                media: media
                            };
                        },
                    }
                }),
            ],
            validation: Rule => Rule.min(1)
        }),
    ],
    preview: {
        select: {
            title: "title",
            layout: "layout",
            features: "features"
        },
        prepare({ title, features }) {
            const featureCount = features?.length || 0;
            return {
                title: title || "Features Block",
                subtitle: `${featureCount} features)`
            };
        },
    },
});