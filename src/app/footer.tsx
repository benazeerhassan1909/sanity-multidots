import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { FOOTER_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';



type AddressSection = {
    _key: string;
    title?: string;
    address?: string;
    phone?: string;
};
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

type SocialLink = {
    _key: string;
    url?: string;
    icon?: (SanityImageSource & { alt?: string; width?: number; height?: number });
};
  
export default async function Footer() {
    const { data: siteSettings } = await sanityFetch({ query: FOOTER_QUERY });

    console.log('Footer siteSettings:', siteSettings);

    const { footerLogo, email, scheduleMeetingTitle, scheduleMeetingUrl, footerLogos = {}, copyrrightText } = siteSettings?.footer || {};
    const addressSections: AddressSection[] = Array.isArray(siteSettings?.footer?.addressSection)
        ? siteSettings.footer.addressSection
        : Array.isArray(siteSettings?.footer?.addressSection?.locations)
            ? siteSettings.footer.addressSection.locations
            : [];
    const menuItems = siteSettings?.footer?.footermenuItems ?? [];
    const socialLinks = siteSettings?.footer?.socialLinks ?? [];

    return (
        <footer className="site-footer">
            <div className='footer-top'>
                <div className='footer-top-left'>
                    {footerLogo && (
                        <div className="footer-logo">
                            <Image
                                src={footerLogo ? urlFor(footerLogo)?.url() ?? '' : ''}
                                alt={footerLogo?.alt || 'Footer Logo'}
                                width={footerLogo?.width || 150}
                                height={footerLogo?.height || 40}
                            />
                        </div>
                    )}

                    <div className="footer-contact">
                        {email && <p className="footer-email">{email}</p>}

                        {scheduleMeetingUrl && (
                            <a href={scheduleMeetingUrl} className="footer-schedule-link">
                                {scheduleMeetingTitle || 'Schedule a Meeting'}
                            </a>
                        )}

                        {/* {buttons.map((button) => (
                    <Link key={button._key} href={button.url} className={`footer__button`}>
                        {button.label}
                    </Link>
                ))} */}
                    </div>

                    {/* Partner Logos */}
                    {(footerLogos.footerLogo1 || footerLogos.footerLogo2 || footerLogos.footerLogo3) && (
                        <div className="footer-partner-logos">
                            {footerLogos.footerLogo1 && (
                                <Image
                                    src={footerLogos.footerLogo1 ? urlFor(footerLogos.footerLogo1)?.url() ?? '' : ''}
                                    alt={footerLogos.footerLogo1.alt || 'Partner Logo 1'}
                                    width={footerLogos.footerLogo1.width || 100}
                                    height={footerLogos.footerLogo1.height || 40}
                                />
                            )}
                            {footerLogos.footerLogo2 && (
                                <Image
                                    src={footerLogos.footerLogo2 ? urlFor(footerLogos.footerLogo2)?.url() ?? '' : ''}
                                    alt={footerLogos.footerLogo2.alt || 'Partner Logo 2'}
                                    width={footerLogos.footerLogo2.width || 100}
                                    height={footerLogos.footerLogo2.height || 40}
                                />
                            )}
                            {footerLogos.footerLogo3 && (
                                <Image
                                    src={footerLogos.footerLogo3 ? urlFor(footerLogos.footerLogo3)?.url() ?? '' : ''}
                                    alt={footerLogos.footerLogo3.alt || 'Partner Logo 3'}
                                    width={footerLogos.footerLogo3.width || 100}
                                    height={footerLogos.footerLogo3.height || 40}
                                />
                            )}
                        </div>
                    )}
                </div>
                <div className='footer-top-right'>
                    {Array.isArray(addressSections)
                        ? addressSections.length > 0 && (
                            <div className="footer-address">
                                <div className="footer-address-inner">
                                    {addressSections.map((locations) => (
                                        <div key={locations._key} className="footer-address-box">
                                            <span className="footer-location-title">{locations.title}</span>
                                            <p className="footer-location-address">{locations.address}</p>
                                            <p className="footer-location-phone">{locations.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                        : typeof addressSections === 'object' &&
                        addressSections !== null &&
                        'locations' in addressSections &&
                        Array.isArray((addressSections as { locations: AddressSection[] }).locations) && (
                            <div className="footer__addressSections">
                                <h3 className="footer__addressSections-title">Our Offices</h3>
                                <div className="footer-address-inner">
                                    {(addressSections as { locations: AddressSection[] }).locations.map((location: AddressSection) => (
                                        <div key={location._key} className="footer-address-box">
                                            <span className="footer-location-title">{location.title}</span>
                                            <p className="footer-location-address">{location.address}</p>
                                            <p className="footer-location-phone">{location.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }

                    {/* Footer Menu */}
                    {menuItems.length > 0 && (
                        <nav className="footer-menu">
                            <ul className="footer-menu-list">
                                {menuItems.map((item: { _key: string; url?: string; title?: string }) => (
                                    <li key={item._key} className="footer-menu-item">
                                        <Link href={item.url ?? '#'} className="footer-menu-link">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-inner'>
                    <div className='footer-bottom-left'>
                        {copyrrightText && (
                            <div className="footer-copyright">
                                <p>{copyrrightText}</p>
                            </div>
                        )}
                    </div>
                    <div className='footer-bottom-right'>
                        {socialLinks.length > 0 && (
                            <div className="footer-social">
                                        {socialLinks.length > 0 && (
                                            <div className="footer-social-inner">
                                                {socialLinks.map((link: SocialLink) => (
                                                    <a
                                                        key={link._key}
                                                        href={link.url}
                                                        className="footer__social-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.icon && (
                                                            <Image
                                                                src={urlFor(link.icon).url()}
                                                                alt={link.icon.alt || 'Social Icon'}
                                                                width={link.icon.width || 24}
                                                                height={link.icon.height || 24}
                                                            />
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}