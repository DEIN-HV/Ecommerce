import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyle from './style';
import { useEffect } from 'react';

function Cart({cart}) {
    const classes =useStyle();
    const isEmpty = !cart.line_items.length;
    

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no item in your cart</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing="3">
                {cart.line_items.map((item) =>(
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
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


    return (
        <Container>
            <div className={classes.toolBar} />

            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>

            {isEmpty? <EmptyCart/> : <FilledCart/>}

            
        </Container>

    )
}

export default Cart
