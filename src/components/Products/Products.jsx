import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import useStyle from "./style";
import FilterProduct from "../FilterProduct/FilterProduct";
import { Category } from "@material-ui/icons";
import Spinner from "../Spinner/Spinner";
import { Link, useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const Products = ({
  products,
  onAddToCart,
  categories,
  isLoadSceen,
  setIsLoadSceen,
  prouductPerCategory,
}) => {
  const classes = useStyle();
  //const [isProductPerCategory, setIsProductPerCategory] = useState(false);
  //const [categorySlug, setCategorySlug] = useState("");
  const [productOneCategory, setProductOneCategory] = useState([]);
  const { slug } = useParams();
  console.log(slug);

  // const fetchProducts = async () => {
  //   const { data: products } = await commerce.products.list();
  //   const { data: categoriesData } = await commerce.categories.list();

  //   //View all product
  //   const fetchProductOneCategory = categoriesData.filter((category) => (

  //   ))

  //   setProductOneCategory(fetchProductOneCategory);
  //   console.log("fetchProductOneCategory", fetchProductOneCategory);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  if (!prouductPerCategory) return <Spinner />;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <FilterProduct
        categories={categories}
        onAddToCart={onAddToCart}
        isLoadSceen={isLoadSceen}
        setIsLoadSceen={setIsLoadSceen}
      />

      {isLoadSceen && (
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
    </main>
  );
};

export default Products;
