import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import '@/app/css/List.css';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type ListItem = {
    _key: string;
    list?: string;
    icon?: SanityImageSource; // SanityImageSource type if available
    description?: string;
};

type ListBlockProps = {
    listtitle?: string;
    listdescription?: string;
    lists?: ListItem[];
};

export default function ListBlock({
    listtitle,
    listdescription,
    lists = []
}: ListBlockProps) {
    return (
        <section className="list-block-main">
            <div className="list-block-inner">
                {listtitle && <h2 className="list-block-title">{listtitle}</h2>}
                {listdescription && <p className="list-block-description">{listdescription}</p>}

                {lists.length > 0 && (
                    <ul className="list-block-items">
                        {lists.map((item) => (
                            <li key={item._key} className="list-block-item">
                                {/* Icon (if exists) */}
                                {item.icon && (
                                    <div className="list-block-icon">
                                        <Image
                                            src={urlFor(item.icon).url()}
                                            alt="List icon"
                                            width={42}
                                            height={60}
                                        />
                                    </div>
                                )}

                                {/* Main list text */}
                                <div className="list-block-content">
                                    {item.list && <h3 className="list-block-item-title">{item.list}</h3>}
                                    {item.description && (
                                        <p className="list-block-item-description">{item.description}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}