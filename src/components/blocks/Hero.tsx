import React from 'react';
import { PortableText } from '@portabletext/react';
import '@/app/css/Hero.css';

import type { TypedObject } from '@portabletext/types';

type HeroBlockProps = {
  text?: TypedObject | TypedObject[]; // PortableText/BlockContent data
  backgroundColor?: string | { hex: string };
  textColor?: string | { hex: string }; // Optional text color
  alignment?: 'left' | 'center' | 'right'; // Optional alignment
};

export default function HeroBlock({ text, backgroundColor, textColor, alignment }: HeroBlockProps) {
  const bgColor = typeof backgroundColor === 'string'
    ? backgroundColor
    : backgroundColor?.hex;

  return (
    text ? (
      <section
        className="hero-block"
        style={{ backgroundColor: bgColor, textAlign: alignment || 'center', color: typeof textColor === 'string' ? textColor : textColor?.hex }}
      >
        <div className="hero-block__container">
          <div className="hero-block__content">
            <PortableText value={text} />
          </div>
        </div>
      </section>
    ) : null
  );
}