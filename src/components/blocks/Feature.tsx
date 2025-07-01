import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import '@/app/css/Feature.css';

type FeatureItem = {
    _key: string;
    title: string;
    text: string;
    icon?: {
        asset: {
            _ref?: string;
            _type?: string;
        };
        alt?: string;
        width?: number;
        height?: number;
    };
};

type FeaturesBlockProps = {
    title?: string;
    subTitle?: string;
    features?: FeatureItem[];
};

export default function FeaturesBlock({
    title,
    subTitle,
    features = []
}: FeaturesBlockProps) {
    return (
        <section className="features-section-main">
            <div className="features-section-inner">
                {(title || subTitle) && (
                    <div className="features-block-heading">
                        {title && <h2 className="features-heading">{title}</h2>}
                        {subTitle && <p className="features-subheading">{subTitle}</p>}
                    </div>
                )}

                <div className="features-block-items">
                    {features.map((feature) => (
                        <div key={feature._key} className="features-block-item">
                            {feature.icon && (
                                <div className="features-block-image">
                                    <Image
                                        src={urlFor(feature.icon).url()}
                                        alt={feature.icon.alt || ''}
                                        width={feature.icon.width || 48}
                                        height={feature.icon.height || 48}
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>
                            )}
                            <div className="features-block-content">
                                <h3 className="features-block-item-title">{feature.title}</h3>
                                <p className="features-block-item-text">{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}