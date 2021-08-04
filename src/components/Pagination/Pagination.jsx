import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
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
  const [pageDisplay, setPageDisplay] = useState([]);
  const [pageNumber, setPageNumber] = useState([]);

  console.log(currentPage);

  const fetchProductOneCategory = async () => {
    const { data } = await commerce.products.list({
      category_slug: slug,
    });
    setDataLength(data.length);
  };

  const totalPage = Math.ceil(dataLength / limit);

  const handlePageDisplay = (currentPage) => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    setPageNumber(pages);

    const arrayPage = [];
    if (currentPage <= 3) {
      pageNumber.map((page) => {
        if (page <= 5) return arrayPage.push(page);
      });
    } else if (currentPage >= totalPage - 2) {
      pageNumber.map((page) => {
        if (page >= totalPage - 5 + 1) return arrayPage.push(page);
      });
    } else {
      pageNumber.map((page) => {
        if (page >= currentPage - 2 && page <= currentPage + 2)
          return arrayPage.push(page);
      });
    }
    setPageDisplay(arrayPage);
    console.log(arrayPage);
  };

  useEffect(() => {
    handlePageDisplay(currentPage);
  }, [currentPage]);

  const RenderPageNumbers = () => (
    <ul className={classes.ulPage}>
      <Button
        disabled={currentPage === 1 ? true : false}
        variant="outlined"
        onClick={() => {
          onChangePage(-1);
        }}
      >
        Prev
      </Button>

      {/* {currentPage > 3 && (
        <li
          className={classes.liPage}
          key={0}
          onClick={() => {
            onChangePage(-1);
          }}
        >
          ...
        </li>
      )} */}
      {pageDisplay.map((page) => (
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

      {/* {currentPage < totalPage - 2 && (
        <li
          className={classes.liPage}
          key={0}
          onClick={() => {
            onChangePage(1);
          }}
        >
          ...
        </li>
      )} */}

      <Button
        disabled={currentPage === totalPage ? true : false}
        variant="outlined"
        onClick={() => {
          onChangePage(1);
        }}
      >
        Next
      </Button>
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
