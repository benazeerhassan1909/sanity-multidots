import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export function Hero({ title, text, image }: HeroProps) {
  return (
    <div className="careers-banner-section-main">
      <div className="careers-banner-images galery">
        <div className="careers-banner-images-inner">
          <div className="entry-content wp-block-post-content has-global-padding is-layout-constrained wp-block-post-content-is-layout-constrained">
            {title ? (
              <h1 className="wp-block-heading has-text-align-center text-center mdinc-title">
                {title}
              </h1>
            ) : null}
            <div className="prose-lg lg:prose-xl prose-invert flex items-center">
              {text ? <PortableText value={text} /> : null}
            </div>
          </div>
          {image ? (
            <Image
              className=""
              src={urlFor(image).auto("format").url()}
              width={1920}
              height={397}
              alt="Banner Image"
              quality={75} // Reduce from default 85
              priority
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}