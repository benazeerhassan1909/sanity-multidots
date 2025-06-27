/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import  HeroBlock  from "@/components/blocks/Hero";
import  ListBlock from "@/components/blocks/List";
import { client } from "@/sanity/lib/client";
import { createDataAttribute } from "next-sanity";
import { useOptimistic } from "next-sanity/hooks";
// import { PAGE_QUERYResult } from "@/sanity/types";
import CTABlock from "@/components/blocks/CTA";
import ClientList from "@/components/blocks/ClientList";
import ImageTextSection from "./blocks/ImageText";
import FeaturesBlock from "./blocks/Feature";



type PageBuilderProps = {
    content: any[];
    documentId: string;
    documentType: string;
};
type BlockType = "hero" | "List" | "ctaBlock" | "clientList" | "imageTextSection" | "features" |string; // Extend with other block types as needed

const { projectId, dataset, stega } = client.config();
export const createDataAttributeConfig = {
    projectId,
    dataset,
    baseUrl: typeof stega.studioUrl === "string" ? stega.studioUrl : "",
};

export function PageBuilder({
    content,
    documentId,
    documentType,
}: PageBuilderProps) {
    const blocks = useOptimistic<
        any[] | undefined,
        { id: string; document?: { content?: any[]; [key: string]: any } }
    >(content, (state, action) => {
        if (action.id === documentId) {
            return (action?.document as { content?: any[] })?.content?.map(
                (block) => state?.find((s) => s._key === block?._key) || block
            );
        }
        return state;
    });

    if (!Array.isArray(blocks)) {
        return null;
    }

    return (
        <main
            data-sanity={createDataAttribute({
                ...createDataAttributeConfig,
                id: documentId,
                type: documentType,
                path: "content",
            }).toString()}
        >
            {blocks.map((block) => {
                const DragHandle = ({ children }: { children: React.ReactNode }) => (
                    <div
                        data-sanity={createDataAttribute({
                            ...createDataAttributeConfig,
                            id: documentId,
                            type: documentType,
                            path: `content[_key=="${block._key}"]`,
                        }).toString()}
                    >
                        {children}
                    </div>
                );

                switch (block._type as BlockType) {
                    case "hero":
                        return (
                            <DragHandle key={block._key}>
                                <HeroBlock {...(block as React.ComponentProps<typeof HeroBlock>)} />
                            </DragHandle>
                        );
                    case "List":
                        return (
                            <DragHandle key={block._key}>
                                <ListBlock {...(block as React.ComponentProps<typeof ListBlock>)} />
                            </DragHandle>
                        );
                    case "ctaBlock":
                        return (
                            <DragHandle key={block._key}>
                                <CTABlock {...(block as React.ComponentProps<typeof CTABlock>)} />
                            </DragHandle>
                        );
                    case "clientList":
                        return (
                            <DragHandle key={block._key}>
                                <ClientList {...(block as React.ComponentProps<typeof ClientList>)} />
                            </DragHandle>
                        );
                    case "imageTextSection":
                        return (
                            <DragHandle key={block._key}>
                                <ImageTextSection {...(block as React.ComponentProps<typeof ImageTextSection>)} />
                            </DragHandle>
                        );
                    case "features":
                        return (
                            <DragHandle key={block._key}>
                                <FeaturesBlock {...(block as React.ComponentProps<typeof FeaturesBlock>)} />    
                            </DragHandle>
                        );
                    default:
                        // This is a fallback for when we don't have a block type
                        return <div>Block not found</div>;
                }
            })}
        </main>
    );
}