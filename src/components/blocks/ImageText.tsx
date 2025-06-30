import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Button from '@/components/Button';
import '@/app/css/ImageText.css';

type ImageTextSectionProps = {
    title?: string;
    subTitle?: string;
    description?: import('@portabletext/types').PortableTextBlock[]; // PortableText/BlockContent data
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
    buttons?: Array<{
        _key: string;
        label: string;
        url: string;
        variant?: string;
    }>;
};

export default function ImageTextSection({
    title,
    subTitle,
    description,
    mainImage,
    imagePosition = 'right',
    buttons = []
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
                    {buttons.length > 0 && (
                        <div className="image-text-section__buttons">
                            {buttons.map((button) => (
                                button.url && button.label &&

                                <Button
                                    key={button._key}
                                    href={button.url}
                                >
                                    {button.label}
                                </Button>
                            ))}
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