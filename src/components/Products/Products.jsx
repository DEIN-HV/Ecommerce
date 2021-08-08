import React, { useEffect, useState, useRef } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import useStyle from "./style";
import FilterProduct from "../FilterProduct/FilterProduct";
import { Category } from "@material-ui/icons";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Pagination from "../Pagination/Pagination";
import ProductPerPage from "./ProductPerPage";
import ProductPerCategory from "./ProductPerCategory";
import Sidebar from "../Sidebar/Sidebar";

const Products = ({
  products,
  onAddToCart,
  categories,
  isLoadSceen,
  setIsLoadSceen,
  prouductPerCategory,
  mobileOpen,
  onDrawerToggle
}) => {
  const classes = useStyle();
  const [productOneCategory, setProductOneCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 8;

  const { slug } = useParams();

  const scrollToCategory = useRef(null);

  //get product per page
  const FetchProductOneCategory = async () => {
    setProductOneCategory([]);
    const { data } = await commerce.products.list({
      category_slug: slug,
      limit: limit,
      page: currentPage,
    });
    setProductOneCategory(data);
  };

  //get category name by slug
  const getCategoryName = () => {
    categories.filter((category) => {
      if (category.slug === slug) setCategoryName(category.name);
    });
  };

  const handleChangePageNumber = (pageNumber) => {
    setProductOneCategory([]);
    setCurrentPage(pageNumber);
  };

  const handleChangePage = (param) => {
    setCurrentPage(currentPage + param);
  };

  useEffect(() => {
    if (slug) {
      FetchProductOneCategory();
      getCategoryName();
    }
  }, [slug, currentPage]);


  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      {/* <button onClick={handleScrollToCategory}>Scroll</button> */}

      <div className={classes.wrapper}>
        <Sidebar categories={categories} slug={slug} mobileOpen={mobileOpen} onDrawerToggle={onDrawerToggle} />

        <Container className={classes.wrapperContent}>
          <FilterProduct
            categories={categories}
            onAddToCart={onAddToCart}
            isLoadSceen={isLoadSceen}
            setIsLoadSceen={setIsLoadSceen}
          />

          {/* View product per category */}
          {isLoadSceen && !slug && (
            <ProductPerCategory
              prouductPerCategory={prouductPerCategory}
              onAddToCart={onAddToCart} />
          )}

          {/* View product by a category */}
          {isLoadSceen && slug && (
            <>
              <div key={slug}>
                <div className={classes.productPerCategory}>
                  <Typography
                    variant="h5"
                    className={classes.productPerCategoryTitle}
                  >
                    {categoryName}
                  </Typography>
                </div>
                <ProductPerPage
                  productOneCategory={productOneCategory}
                  onAddToCart={onAddToCart} />
              </div>
              <Pagination
                slug={slug}
                limit={limit}
                currentPage={currentPage}
                onChangePageNumber={handleChangePageNumber}
                onChangePage={handleChangePage}
              />
            </>
          )}
        </Container>
      </div>


    </main>
  );
};

export default Products;
