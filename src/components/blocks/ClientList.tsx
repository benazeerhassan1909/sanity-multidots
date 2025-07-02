import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import '@/app/css/ClientList.css';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';

type ClientLogo = {
    _key: string;
    alt?: string;
    width?: number;
    height?: number;
    asset?: SanityImageSource;
    url?: string;
};

type ClientListProps = {
    title?: string;
    text?: string;
    logos?: ClientLogo[];
    backgroundColor?: string | { hex: string };
    textColor?: string | { hex: string };
};

export default function ClientList({
    title,
    text,
    logos = [],
    backgroundColor,
    textColor
}: ClientListProps) {
    // Get background and text colors
    const bgColor = typeof backgroundColor === 'string'
        ? backgroundColor
        : backgroundColor?.hex;

    const txtColor = typeof textColor === 'string'
        ? textColor
        : textColor?.hex;

    return (
        <section
            className="client-list-main"
            style={{
                backgroundColor: bgColor,
                color: txtColor,
            }}
        >
            <div className="container">
                {title && <h2 className="client-list-title">{title}</h2>}
                {text && <p className="client-list-text">{text}</p>}

                {logos.length > 0 && (
                    <div className="client-list-grid">
                        {logos.map((logo) => {
                            // Skip if no image asset exists
                            if (!logo.asset) return null;

                            const imageUrl = urlFor(logo).url();
                            if (!imageUrl) return null;

                            return (
                                <div key={logo._key} className="client-list-logo">
                                    <div className="client-list-logo-image">
                                        {logo.url ? (
                                            <Link href={logo.url} target="_blank">
                                                <Image
                                                    src={imageUrl}
                                                    alt={logo.alt || 'Client logo'}
                                                    width={logo.width || 150}
                                                    height={logo.height || 40}
                                                    style={{
                                                        objectFit: 'contain',
                                                        objectPosition: 'center',
                                                    }}
                                                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                                                />
                                            </Link>
                                        ) : (
                                            <Image
                                                src={imageUrl}
                                                alt={logo.alt || 'Client logo'}
                                                width={logo.width || 150}
                                                height={logo.height || 40}
                                                style={{
                                                    objectFit: 'contain',
                                                    objectPosition: 'center',
                                                }}
                                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                                            />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}