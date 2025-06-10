import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import Header from "../header";
import Footer from "../footer";
import Head from 'next/head';
import ScrollHandler from "@/components/ScrollHandler";



export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ScrollHandler />
      <body className="">
        <div className="">
          <Header />
          <main className="">
            {children}
            <SanityLive />
            {(await draftMode()).isEnabled && (
              <>
                <DisableDraftMode />
                <VisualEditing />
              </>
            )}

          </main>
        </div>
        <Footer />
      </body>
    </>
  );
}