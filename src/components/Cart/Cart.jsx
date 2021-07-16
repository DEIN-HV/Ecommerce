import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyle from './style';
import { useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

function Cart({ cart }) {
    const classes = useStyle();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no item in your cart,
            <Link to="/"></Link>start adding some
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing="3">
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>

            <div className={classes.cartDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} color="secondary" size="large" type="button" variant="containe">Empty cart</Button>
                    <Button className={classes.checkoutButton} color="primary" size="large" type="button" variant="containe">Checkout</Button>
                </div>
            </div>
        </>
    )

    if (!cart.line_items) return "loading..."

    return (
        <Container>
            <div className={classes.toolBar} />

            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>

            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}


        </Container>

    )
}

export default Cart
