import React, { useEffect, useState } from 'react';
import { commerce } from "../../lib/commerce";

import useStyle from './style';

const Pagination = ({ slug, limit }) => {

    const classes = useStyle();

    const [currentPage, setcurrentPage] = useState(1);
    const [dataLength, setDataLength] = useState(0);

    const fetchProductOneCategory = async () => {
        const { data } = await commerce.products.list({
            category_slug: slug,
        })
        setDataLength(data.length);
    }

    const totalPage = Math.ceil(dataLength / limit);

    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }

    console.log(pages);

    const RenderPageNumbers = () => (
        <ul className={classes.ulPage}>
            {pages.map((page) => (
                <li className={classes.liPage} key={page}>
                    {page}
                </li>
            ))}
        </ul>
    )

    useEffect(() => {
        fetchProductOneCategory();
    }, [slug])

    return (
        <div className={classes.pagination}>
            <RenderPageNumbers />
        </div>
    )
}

export default Pagination
