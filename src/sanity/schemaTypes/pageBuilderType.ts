import { defineType, defineArrayMember } from "sanity";

export const pageBuilderType = defineType({
    name: "pageBuilder",
    type: "array",
    of: [
        defineArrayMember({ type: "hero" }),
        defineArrayMember({ type: "List" }),
        defineArrayMember({
            type: "ctaBlock",
            title: "Call to Action Block",
            description: "A block for call to action content",
        }),
        defineArrayMember({
            type: "imageTextSection"
        }),
        defineArrayMember({
            type: "clientList"
        }),
        defineArrayMember({
            type: "features"
        }),


    ],
    options: {
        insertMenu: {
            views: [
                {
                    name: "grid",
                    previewImageUrl: (schemaType) => `/block-previews/${schemaType}.png`,
                },
            ],
        },
    },
});