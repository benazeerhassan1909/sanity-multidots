import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { HEADER_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';

export default async function Header() {
    const { data: siteSettings } = await sanityFetch({ query: HEADER_QUERY });

    const { logo, sanityLogo, siteTitle } = siteSettings || {};


    return (
        <div className="header__container">
            <div className="header__logo">
                {logo && (
                    <Link href="/">
                        <Image
                            src={urlFor(logo).url()}
                            alt={logo.alt || siteTitle || 'Logo'}
                            width={logo.width || 150}
                            height={logo.height || 40}
                            priority
                        />
                    </Link>
                )}
            </div>

            <nav className="header__nav">
                {/* Add your navigation here */}
            </nav>

            {sanityLogo && (
                <div className="header__sanity-logo">
                    <Image
                        src={urlFor(sanityLogo).url()}
                        alt={sanityLogo.alt || 'Sanity Logo'}
                        width={sanityLogo.width || 100}
                        height={sanityLogo.height || 30}
                    />
                </div>
            )}
        </div>
    );
}