import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import useStyle from "./style";
import FilterProduct from "../FilterProduct/FilterProduct";
import { Category } from "@material-ui/icons";

const Products = ({ products, onAddToCart, categories, isLoadSceen, setIsLoadSceen, prouductByCategory }) => {
  const classes = useStyle();

  console.log(prouductByCategory);

  if (!prouductByCategory) return "Loading..."
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <FilterProduct categories={categories}
        onAddToCart={onAddToCart}
        isLoadSceen={isLoadSceen}
        setIsLoadSceen={setIsLoadSceen} />

      {isLoadSceen &&
        <Container>
          {prouductByCategory.map((category) => (
            <>
              <div className={classes.productPerCategory}>
                <Typography variant="h5" className={classes.productPerCategoryTitle}>{category.name} </Typography>
              </div>

              <Grid item xs={12}>
                <Grid container justifyContent="left" spacing={4}>
                  {category.productData.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                      <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </>
          ))}
        </Container>
      }
    </main >
  );
};

export default Products;
