import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import Header from "../header";
import Footer from "../footer";
import Head from 'next/head';
import ScrollHandler from "@/components/ScrollHandler";
import "@/app/globals.css";

type PageSEO = {
  seo?: {
    title?: string;
    description?: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
    noIndex?: boolean;
  };
  title?: string;
};

export default async function FrontendLayout({
  children,
  pageData
}: Readonly<{
  children: React.ReactNode;
  pageData?: PageSEO;
}>) {
  const pageTitle = pageData?.seo?.title || pageData?.title || "Default Title";
  const pageDescription = pageData?.seo?.description || "Default description";
  const pageImage = pageData?.seo?.image?.asset?.url;
  const noIndex = pageData?.seo?.noIndex;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        {pageImage && <meta property="og:image" content={pageImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {pageImage && <meta name="twitter:image" content={pageImage} />}

        {/* No-index if specified */}
        {noIndex && (
          <>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="googlebot" content="noindex, nofollow" />
          </>
        )}
      </Head>
      <ScrollHandler />
      <body>
        <div className="container">
          <Header />
          <main className="main-content">
            {children}
            <SanityLive />
            {(await draftMode()).isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
            )}
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
}