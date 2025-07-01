import React from 'react';
import { PortableText } from '@portabletext/react';
import '@/app/css/Hero.css';
import type { TypedObject } from '@portabletext/types';

type HeroBlockProps = {
  text?: TypedObject | TypedObject[];
  backgroundColor?: string | { hex: string };
  textColor?: string | { hex: string };
  alignment?: 'left' | 'center' | 'right';
  bgImage?: {
    asset?: {
      _ref?: string;
      _type?: string;
    };
    alt?: string;
    [key: string]: unknown;
  };
};

export default function HeroBlock({
  text,
  backgroundColor,
  textColor,
  alignment = 'center',
  bgImage
}: HeroBlockProps) {
  const bgColor = typeof backgroundColor === 'string'
    ? backgroundColor
    : backgroundColor?.hex;

  const txtColor = typeof textColor === 'string'
    ? textColor
    : textColor?.hex;

  // Generate background image URL if available
  console.log(bgImage);
  return text ? (
    <section
      className="hero-block"
      style={{
        backgroundColor: bgColor,
        textAlign: alignment,
        color: txtColor,
      }}
    >
      <div className="hero-block__container">
        <div className='hero-block__border'></div>
        <div className="hero-block__content">
          <PortableText value={text} />
        </div>
      </div>
    </section>
  ) : null;
}