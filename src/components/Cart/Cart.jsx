import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';

function Cart() {
    const isEmpty = true;
    const emptyCart = () => (
        <Typography variant="subtitle1">You have no item in your cart</Typography>
    );

    const filledCart = () => (
        <>
            <Grid spacing="3">

            </Grid>
        </>
    )


    return (
        <Container>
            <div className={classes.toolBar} />

            <Typography className={classes.title} variant="h3">Your shoppping cart</Typography>


        </Container>

    )
}

export default Cart
