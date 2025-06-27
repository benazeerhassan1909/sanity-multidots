import type { Metadata } from "next";
import { PageBuilder } from "@/components/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

type RouteProps = {
    params: Promise<{ slug: string }>;
};

const getPage = async (params: RouteProps["params"]) =>
    sanityFetch({
        query: PAGE_QUERY,
        params: await params,
    });

export async function generateMetadata({
    params,
}: RouteProps): Promise<Metadata> {
    const { data: page } = await getPage(params);

    if (!page) {
        return {}
    }

    const homePage = page?.homePage;

    if (!homePage) {
        return {};
    }

    const metadata: Metadata = {
        title: homePage.seo?.title || homePage.title,
        description: homePage.seo?.description,
    };

    metadata.openGraph = {
        images: {
            url: homePage.seo?.image
                ? urlFor(homePage.seo.image).width(1200).height(630).url()
                : `/api/og?id=${homePage._id}`,
            width: 1200,
            height: 630,
        },
    };

    if (homePage.seo?.noIndex) {
        metadata.robots = "noindex";
    }

    return metadata;
}

export default async function Page({ params }: RouteProps) {
    const { data: page } = await getPage(params);
    const homePage = page?.homePage;

    return homePage?.content ? (
        <>
        <PageBuilder
            documentId={homePage._id}
            documentType={homePage._type}
            content={homePage.content}
            />
        </>
    ) : null;
}