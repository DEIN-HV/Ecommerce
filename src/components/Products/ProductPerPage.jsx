import React from 'react'
import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";
import Spinner from '../Spinner/Spinner';
import Product from '../Product/Product';

const ProductPerPage = ({ productOneCategory, onAddToCart }) => {
    const classes = useStyle();

    if (productOneCategory.length == 0) return <Spinner />;
    return (
        <Grid item xs={12}>
            <Grid container justifyContent="flex-start" spacing={4}>
                {productOneCategory.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ProductPerPage
