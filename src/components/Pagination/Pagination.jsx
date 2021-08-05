import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Spinner from "../Spinner/Spinner";

import useStyle from "./style";

const Pagination = ({
  limit,
  onChangePageNumber,
  currentPage,
  onChangePage,
  slug
}) => {
  const classes = useStyle();
  const [dataLength, setDataLength] = useState(0);
  const [pageDisplay, setPageDisplay] = useState([]);

  const fetchProductOneCategory = async () => {
    const { data } = await commerce.products.list({
      category_slug: slug,
    });
    setDataLength(data.length);
  };

  const totalPage = Math.ceil(dataLength / limit);
  console.log(totalPage);

  const handlePageDisplay = (currentPage) => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }

    const arrayPage = [];
    if (currentPage <= 3) {
      pages.map((page) => {
        if (page <= 5) return arrayPage.push(page);
      });
    } else if (currentPage >= totalPage - 2) {
      pages.map((page) => {
        if (page >= totalPage - 5 + 1) return arrayPage.push(page);
      });
    } else {
      pages.map((page) => {
        if (page >= currentPage - 2 && page <= currentPage + 2)
          return arrayPage.push(page);
      });
    }
    setPageDisplay(arrayPage);
    console.log(arrayPage);
  };

  useEffect(() => {
    handlePageDisplay(currentPage);
  }, [currentPage, dataLength]);

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

  if (pageDisplay.length == 0) return "loading...";

  return (
    <div className={classes.pagination}>
      <RenderPageNumbers />
    </div>
  );
};

export default Pagination;
