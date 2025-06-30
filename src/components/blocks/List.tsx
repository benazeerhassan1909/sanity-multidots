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
        <section className="list-block">
            <div className="list-block__container">
                {listtitle && <h2 className="list-block__title">{listtitle}</h2>}
                {listdescription && <p className="list-block__description">{listdescription}</p>}

                {lists.length > 0 && (
                    <ul className="list-block__items">
                        {lists.map((item) => (
                            <li key={item._key} className="list-block__item">
                                {/* Icon (if exists) */}
                                {item.icon && (
                                    <div className="list-block__icon">
                                        <Image
                                            src={urlFor(item.icon).url()}
                                            alt="List icon"
                                            width={42}
                                            height={60}
                                        />
                                    </div>
                                )}

                                {/* Main list text */}
                                <div className="list-block__content">
                                    {item.list && <h3 className="list-block__item-title">{item.list}</h3>}
                                    {item.description && (
                                        <p className="list-block__item-description">{item.description}</p>
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