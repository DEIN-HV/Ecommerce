import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart, ShoppingCart } from '@material-ui/icons';
import useStyle from './style';

const Product = ({ product }) => {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title}></CardMedia>

            <CardContent >
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>

                <Typography variant="body2" color="textSecondary" >
                    {product.description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart">
                    <ShoppingCart />
                </IconButton>
            </CardActions>

        </Card>
    )
}

export default Product
