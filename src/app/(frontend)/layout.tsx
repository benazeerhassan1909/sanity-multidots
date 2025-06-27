import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { SanityLive } from "@/sanity/lib/live";
import Header from "../header";
import Footer from "../footer";
import Head from 'next/head';
import ScrollHandler from "@/components/ScrollHandler";
import "@/app/globals.css";


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
      <body className="container">
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
      </body>
    </>
  );
}