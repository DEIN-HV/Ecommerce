import React from 'react'
import { Grid } from '@material-ui/core';
import Product from '../Product/Product';
import useStyle from './style';

// const products = [
//     { id: 1, name: 'Men Shoes', description: 'Unique design', price: '100$', image: 'https://i.pinimg.com/originals/eb/8f/48/eb8f48348d1fe3621e95046d95b65f5a.jpg' },
//     { id: 2, name: 'Women Shoes', description: 'Young design', price: '120$', image: 'https://i.pinimg.com/236x/d1/dc/1a/d1dc1a79da1e8faf450b48fd887ee30f.jpg' },
//     { id: 3, name: 'Party shoes', description: 'Polite design', price: '200$', image: 'https://i.pinimg.com/236x/4f/c0/1f/4fc01f4436230226f9c71b7d640b4904.jpg' },
// ]

const Products = ({ products }) => {
    const classes = useStyle();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
