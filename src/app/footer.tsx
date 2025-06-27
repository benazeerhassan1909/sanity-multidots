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
    // const socialLinks = siteSettings?.footer?.socialLinks ?? [];




    return (


        <div className="footer__container">
            {/* Footer Logo */}
            {footerLogo && (
                <div className="footer__logo">
                    <Image
                        src={footerLogo ? urlFor(footerLogo)?.url() ?? '' : ''}
                        alt={footerLogo?.alt || 'Footer Logo'}
                        width={footerLogo?.width || 150}
                        height={footerLogo?.height || 40}
                    />
                </div>
            )}

            <div className="footer__contact">
                {email && <p className="footer__email">{email}</p>}

                {scheduleMeetingUrl && (
                    <a href={scheduleMeetingUrl} className="footer__schedule-link">
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
                <div className="footer__partner-logos">
                    {footerLogos.footerLogo1 && (
                        <Image
                            src={footerLogos.footerLogo1 ? urlFor(footerLogos.footerLogo1)?.url() ?? '' : ''}
                            alt="Partner Logo 1"
                            width={100}
                            height={40}
                        />
                    )}
                    {footerLogos.footerLogo2 && (
                        <Image
                            src={footerLogos.footerLogo2 ? urlFor(footerLogos.footerLogo2)?.url() ?? '' : ''}
                            alt="Partner Logo 2"
                            width={100}
                            height={40}
                        />
                    )}
                    {footerLogos.footerLogo3 && (
                        <Image
                            src={footerLogos.footerLogo3 ? urlFor(footerLogos.footerLogo3)?.url() ?? '' : ''}
                            alt="Partner Logo 3"
                            width={100}
                            height={40}
                        />
                    )}
                </div>
            )}
            {Array.isArray(addressSections)
                ? addressSections.length > 0 && (
                    <div className="footer__addressSections">
                        <h3 className="footer__addressSections-title">Our Offices</h3>
                        <div className="footer__addressSections-grid">
                            {addressSections.map((locations) => (
                                <div key={locations._key} className="footer__location">
                                    <h4 className="footer__location-title">{locations.title}</h4>
                                    <p className="footer__location-address">{locations.address}</p>
                                    <p className="footer__location-phone">{locations.phone}</p>
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
                        <div className="footer__addressSections-grid">
                            {(addressSections as { locations: AddressSection[] }).locations.map((location: AddressSection) => (
                                <div key={location._key} className="footer__location">
                                    <h4 className="footer__location-title">{location.title}</h4>
                                    <p className="footer__location-address">{location.address}</p>
                                    <p className="footer__location-phone">{location.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }

            {/* Footer Menu */}
            {menuItems.length > 0 && (
                <nav className="footer__menu">
                    <ul className="footer__menu-list">
                        {menuItems.map((item) => (
                            <li key={item._key} className="footer__menu-item">
                                <Link href={item.url ?? '#'} className="footer__menu-link">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* Social Links */}
            {/* {socialLinks.length > 0 && (
                <div className="footer__social">
                    {socialLinks.map((link) => (
                        <a
                            key={link._key}
                            href={link.url}
                            className="footer__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={link.icon} />
                        </a>
                    ))}
                </div>
            )} */}

            {/* Copyright */}
            {copyrrightText && (
                <div className="footer__copyright">
                    <p>{copyrrightText}</p>
                </div>
            )}
        </div>
    );
}