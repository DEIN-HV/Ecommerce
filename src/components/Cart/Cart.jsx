import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyle from "./style";
import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart({ cart, onUpdateCartQty, onRemoveCartItem, onEmptyCart }) {
  const classes = useStyle();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no item in your cart,
      <Link className={classes.link} to="/">
        {" "}
        start adding some
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onRemoveCartItem={onRemoveCartItem}
              onUpdateCartQty={onUpdateCartQty}
            />
          </Grid>
        ))}
      </Grid>

      <div className={classes.cartDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            color="secondary"
            size="large"
            type="button"
            variant="contained"
            onClick={onEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            color="primary"
            size="large"
            type="button"
            variant="contained"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return "loading...";

  return (
    <Container className={classes.cartContainer}>
      <div className={classes.toolBar} />

      <Typography className={classes.title} variant="h5" gutterBottom>
        Your Shopping Cart
      </Typography>

      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}

export default Cart;
