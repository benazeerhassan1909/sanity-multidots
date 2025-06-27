import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import '@/app/css/ClientList.css'; 


type ClientLogo = {
    _key?: string;
    alt?: string;
    [key: string]: unknown;
};
type ClientListProps = {
    title?: string;
    text?: string;
    logos?: ClientLogo[];
    backgroundColor?: string | { hex: string };
    textColor?: string | { hex: string };
};


export default function ClientList({ title, text, logos, backgroundColor, textColor }: ClientListProps) {
    return (
        <section
            className="client-list"
            style={{
                backgroundColor:
                    typeof backgroundColor === 'string'
                        ? backgroundColor
                        : backgroundColor?.hex,
                color:
                    typeof textColor === 'string' ? textColor : textColor?.hex,
            }}
        >
            <div className="client-list__container">
                {title && <h2 className="client-list__title">{title}</h2>}
                {text && <p className="client-list__text">{text}</p>}

                {logos && (
                    <div className="client-list__grid">
                        {logos.map((logo, index) => (
                            <div key={logo._key || index} className="client-list__logo-container">
                                <div className="client-list__logo-wrapper">
                                    <Image
                                        src={urlFor(logo).url()}
                                        alt={logo.alt || 'Client logo'}
                                        fill
                                        style={{
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                        }}
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
      );
}