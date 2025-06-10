/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Hero } from "@/components/blocks/Hero";
import { client } from "@/sanity/lib/client";
import { createDataAttribute } from "next-sanity";
import { useOptimistic } from "next-sanity/hooks";
import { PAGE_QUERYResult } from "@/sanity/types";



type PageBuilderProps = {
    content: any[];
    documentId: string;
    documentType: string;
};

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
        NonNullable<PAGE_QUERYResult>["content"] | undefined,
        NonNullable<PAGE_QUERYResult>
    >(content, (state, action) => {
        if (action.id === documentId) {
            return action?.document?.content?.map(
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

                switch (block._type) {
                    case "hero":
                        return (
                            <DragHandle key={block._key}>
                                <Hero {...block} />
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