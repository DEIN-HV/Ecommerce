import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Product from "../Product/Product";
import useStyle from "./style";
import FilterProduct from "../FilterProduct/FilterProduct";

const Products = ({ products, onAddToCart, categories, isLoadSceen, setIsLoadSceen }) => {
  const classes = useStyle();


  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <FilterProduct categories={categories}
        onAddToCart={onAddToCart}
        isLoadSceen={isLoadSceen}
        setIsLoadSceen={setIsLoadSceen} />

      {isLoadSceen &&
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      }
    </main >
  );
};

export default Products;
