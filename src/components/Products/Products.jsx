import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import useStyle from "./style";
import FilterProduct from "../FilterProduct/FilterProduct";
import { Category } from "@material-ui/icons";
import Spinner from "../Spinner/Spinner";
import { Link, useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Pagination from "../Pagination/Pagination";

const Products = ({
  products,
  onAddToCart,
  categories,
  isLoadSceen,
  setIsLoadSceen,
  prouductPerCategory,
}) => {
  const classes = useStyle();
  const [productOneCategory, setProductOneCategory] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(1);

  const { slug } = useParams();

  const FetchProductOneCategory = async () => {
    const { data } = await commerce.products.list({
      category_slug: slug,
      limit: limit,
      page: currentPage,
    });
    setProductOneCategory(data);
    //console.log(data.length);
  };

  //get category name by slug
  const getCategoryName = () => {
    categories.filter((category) => {
      if (category.slug === slug) setCategoryName(category.name);
    });
  };

  const handleChangePageNumber = (pageNumber) => {
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

  if (!prouductPerCategory) return <Spinner />;
  if (!productOneCategory || !prouductPerCategory) return <Spinner />;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <FilterProduct
        categories={categories}
        onAddToCart={onAddToCart}
        isLoadSceen={isLoadSceen}
        setIsLoadSceen={setIsLoadSceen}
      />

      {/* View product per category */}
      {isLoadSceen && !slug && (
        <Container>
          {prouductPerCategory.map((category) => (
            <div key={category.id}>
              <div className={classes.productPerCategory}>
                <Typography
                  variant="h5"
                  className={classes.productPerCategoryTitle}
                >
                  {category.name}{" "}
                </Typography>

                <Link to={`/${category.slug}`} className={classes.viewLink}>
                  View all ＞
                </Link>
              </div>

              <Grid item xs={12}>
                <Grid container justifyContent="flex-start" spacing={4}>
                  {category.productData.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </div>
          ))}
        </Container>
      )}

      {/* View product by a category */}
      {isLoadSceen && slug && (
        <Container>
          <div key={slug}>
            <div className={classes.productPerCategory}>
              <Typography
                variant="h5"
                className={classes.productPerCategoryTitle}
              >
                {categoryName}
              </Typography>
            </div>
            <Grid item xs={12}>
              <Grid container justifyContent="flex-start" spacing={4}>
                {productOneCategory.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </div>

          <Pagination
            slug={slug}
            limit={limit}
            currentPage={currentPage}
            onChangePageNumber={handleChangePageNumber}
            onChangePage={handleChangePage}
          />
        </Container>
      )}
    </main>
  );
};

export default Products;
