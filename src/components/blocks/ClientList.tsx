import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import '@/app/css/ClientList.css';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type ClientLogo = {
    _key: string;
    alt?: string;
    width?: number;
    height?: number;
    asset?: SanityImageSource;
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
            className="client-list"
            style={{
                backgroundColor: bgColor,
                color: txtColor,
            }}
        >
            <div className="client-list__container">
                {title && <h2 className="client-list__title">{title}</h2>}
                {text && <p className="client-list__text">{text}</p>}

                {logos.length > 0 && (
                    <div className="client-list__grid">
                        {logos.map((logo) => {
                            // Skip if no image asset exists
                            if (!logo.asset) return null;

                            const imageUrl = urlFor(logo).url();
                            if (!imageUrl) return null;

                            return (
                                <div key={logo._key} className="client-list__logo-container">
                                    <div className="client-list__logo-wrapper">
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