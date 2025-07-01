import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import '@/app/css/ImageText.css';

type ButtonProps = {
    text: string;
    link: string;
    openInNewTab?: boolean;
};

type ImageTextSectionProps = {
    title?: string;
    subTitle?: string;
    description?: import('@portabletext/types').PortableTextBlock[];
    mainImage?: {
        asset?: {
            _ref?: string;
            _type?: string;
        };
        alt?: string;
        width?: number;
        height?: number;
        [key: string]: unknown;
    };
    imagePosition?: 'left' | 'right';
    button?: ButtonProps; // Changed from buttons[] to single button
};

export default function ImageTextSection({
    title,
    subTitle,
    description,
    mainImage,
    imagePosition = 'right',
    button // Now accepts single button
}: ImageTextSectionProps) {
    return (
        <section className={`image-text-section image-text-section--${imagePosition}`}>
            <div className="image-text-section__header">
                {title && <h2 className="image-text-section__title">{title}</h2>}
                {subTitle && <p className="image-text-section__subtitle">{subTitle}</p>}
            </div>
            <div className="image-text-section__container">
                <div className="image-text-section__content">
                    {description && (
                        <div className="image-text-section__description">
                            <PortableText value={description} />
                        </div>
                    )}
                    {button && (
                        <div className="image-text-section__button-wrapper">
                            <a
                                href={button.link}
                                className="image-text-section__button"
                                target={button.openInNewTab ? "_blank" : "_self"}
                                rel={button.openInNewTab ? "noopener noreferrer" : undefined}
                            >
                                {button.text}
                            </a>
                        </div>
                    )}
                </div>

                {mainImage && mainImage.asset && (
                    <div className="image-text-section__image-wrapper">
                        <Image
                            src={urlFor(mainImage).url()}
                            alt={mainImage.alt || ''}
                            width={typeof mainImage.width === 'number' ? mainImage.width : 400}
                            height={typeof mainImage.height === 'number' ? mainImage.height : 400}
                            className="image-text-section__image"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}