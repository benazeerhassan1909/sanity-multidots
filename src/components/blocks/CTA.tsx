import React from 'react';
import Button from '@/components/Button'; // Assuming you have a Button component
import '@/app/css/CTA.css';

type CtaBlockProps = {
    heading?: string;
    subheading?: string;
    buttons?: Array<{
        _key: string;
        label: string;
        url: string;
        variant?: string;
    }>;
    backgroundColor?: string | { hex: string };
    textColor?: string | { hex: string };
    customBackgroundColor?: { hex: string };
};

export default function CTABlock({
    heading,
    subheading,
    buttons,
    backgroundColor,
    textColor,
}: CtaBlockProps) {
   

    return (
        <section className={`cta-block-main`} style={{
            backgroundColor: typeof backgroundColor === 'string'
                ? backgroundColor
                : backgroundColor?.hex || 'transparent',
            color: typeof textColor === 'string' ? textColor : textColor?.hex
        }} >
            <div className="cta-block-content">
            {heading && <h2 className="cta-block-heading">{heading}</h2>}
                {subheading && <p className="cta-block-description">{subheading}</p>}
            </div>

            {buttons && buttons.length > 0 && (
                <div className="cta-block-buttons">
                    {buttons.map((button) => (
                        <Button
                            key={button._key}
                            href={button.url}
                        >
                            {button.label}
                        </Button>
                    ))}
                </div>
            )}
        </section>
    );
}