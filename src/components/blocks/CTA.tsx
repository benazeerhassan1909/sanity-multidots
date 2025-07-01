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
        <section className="cta-block">
            <div
                className="cta-block__container"
                style={{
                    backgroundColor: typeof backgroundColor === 'string'
                        ? backgroundColor
                        : backgroundColor?.hex || 'transparent',
                    color: typeof textColor === 'string' ? textColor : textColor?.hex
                }}
            >
                <div className="cta-block__content">
                    {heading && <h2 className="cta-block__heading">{heading}</h2>}
                    {subheading && <p className="cta-block__subheading">{subheading}</p>}
                </div>

                {button && (
                    <div className="cta-block__button-wrapper">
                        <a
                            href={button.link}
                            className="cta-block__button"
                            target={button.openInNewTab ? "_blank" : "_self"}
                            rel={button.openInNewTab ? "noopener noreferrer" : undefined}
                        >
                            {button.text}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}