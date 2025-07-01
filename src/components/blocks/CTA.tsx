import React from 'react';
import '@/app/css/CTA.css';

type ButtonProps = {
    text: string;
    link: string;
    openInNewTab?: boolean;
};

type CtaBlockProps = {
    heading?: string;
    subheading?: string;
    button?: ButtonProps; // Changed from buttons[] to single button
    backgroundColor?: string | { hex: string };
    textColor?: string | { hex: string };
};

export default function CTABlock({
    heading,
    subheading,
    button, // Now accepts single button
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

            {button && (
                <div className="cta-block-buttons">
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
        </section>
    );
}