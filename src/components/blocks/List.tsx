import React from 'react';
import '@/app/css/List.css';

type ListBlockProps = {
    listtitle?: string;
    listdescription?: string;
    lists?: string[];
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
                        {lists.map((item, index) => (
                            <li key={index} className="list-block__item">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}