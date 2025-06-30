import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const heroType = defineType({
    name: "hero",
    type: "object",
    fields: [
        defineField({
            name: "text",
            type: "blockContent",
            title: "Hero Text",
            description: "Text to display in the Hero section",
        }),
        // add background color
        defineField({
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'color',
            description: 'Choose a background color for the Hero',
            
        }),
        // add bg image field
        defineField({
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
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
        }),
        // text color
        defineField({
            name: 'textColor',
            title: 'Text Color',
            type: 'color',
            description: 'Choose a text color for the Hero',
        }),
        //alignment
        defineField({
            name: "alignment",
            type: "string",
            title: "Alignment",
            description: "Choose the alignment of the text in the Hero section",
            options: {
                list: ["left", "center", "right"],            
                layout: "radio",                        
            },
            initialValue: "center",
        }),
    ],
    icon: TextIcon,
    preview: {
        select: {
            title: "title",
            media: "image",
        },
        prepare({ title, media }) {
            return {
                title: title ?? "Hero Block",
                media: media ?? TextIcon,
            };
        },
    },
});