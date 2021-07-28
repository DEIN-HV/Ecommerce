import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyle from "./style";
import FilterProduct from "../FilterProduct/FilterProduct";

const Products = ({ products, onAddToCart, categories }) => {
  const classes = useStyle();

  //console.log('categories', categories);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <FilterProduct categories={categories} />
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </main>
  );
};

export default Products;
