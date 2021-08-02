import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";

import useStyle from "./style";

const Pagination = ({
  slug,
  limit,
  onChangePageNumber,
  currentPage,
  onChangePage,
}) => {
  const classes = useStyle();

  const [dataLength, setDataLength] = useState(0);

  const fetchProductOneCategory = async () => {
    const { data } = await commerce.products.list({
      category_slug: slug,
    });
    setDataLength(data.length);
  };

  const totalPage = Math.ceil(dataLength / limit);

  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }

  console.log(pages);

  const RenderPageNumbers = () => (
    <ul className={classes.ulPage}>
      <li
        className={classes.liPage}
        onClick={() => {
          onChangePage(-1);
        }}
      >
        Prev
      </li>
      {pages.map((page) => (
        <li
          className={
            currentPage === page ? classes.liPageActive : classes.liPage
          }
          key={page}
          onClick={() => {
            onChangePageNumber(page);
          }}
        >
          {page}
        </li>
      ))}

      <li
        className={classes.liPage}
        onClick={() => {
          onChangePage(1);
        }}
      >
        Next
      </li>
    </ul>
  );

  useEffect(() => {
    fetchProductOneCategory();
  }, [slug]);

  return (
    <div className={classes.pagination}>
      <RenderPageNumbers />
    </div>
  );
};

export default Pagination;
