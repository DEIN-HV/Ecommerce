import React, { useEffect, useState } from "react";
import useStyle from "./style";
import {
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import { commerce } from "../../lib/commerce";
import { AddShoppingCart } from "@material-ui/icons";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

const ProductDetail = ({ onAddToCart }) => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const fetchProduct = async (id) => {
    const res = await commerce.products.retrieve(id);
    const { name, media, price, description, inventory } = res;
    setProduct({
      id,
      name,
      src: media.source,
      price: price.formatted_with_symbol,
      description,
      inventory: inventory.available,
    });

    //console.log("fetchProduct", product);
  };

  const handleQuantity = (type) => {
    if (type === "increase" && quantity < 10) setQuantity(quantity + 1);
    if (type === "decrease" && quantity > 0) setQuantity(quantity - 1);
  };

  useEffect(() => {
    //const id = window.location.pathname.split("/");
    fetchProduct(id);
  }, []);

  const classes = useStyle();

  if (!product) return "loading...";
  return (
    <>
      <div className={classes.toolBar} />
      <Container>
        <Grid container spacing={4} className={classes.productDetail}>
          <Grid item xs={12} md={8} className={classes.imageWrapper}>
            <img className={classes.productImage} src={product.src}></img>
          </Grid>

          <Grid item xs={12} md={4} className={classes.detailContent}>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="h5">{product.price}</Typography>
            <Typography variant="body1">
              Inventory: {product.inventory}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: product.description }}
              variant="body2"
              color="textSecondary"
            />

            <Grid className={classes.groupButton} spacing={2}>
              <Button
                className={classes.button}
                variant="contained"
                color="default"
                type="button"
                size="small"
                onClick={() => {
                  handleQuantity("decrease");
                }}
              >
                -
              </Button>
              <Typography className={classes.quantityBox}>
                {quantity}
              </Typography>
              <Button
                className={classes.button}
                variant="contained"
                color="default"
                type="button"
                size="small"
                onClick={() => {
                  handleQuantity("increase");
                }}
              >
                +
              </Button>
            </Grid>

            <Button
              className={classes.button}
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => {
                onAddToCart(product.id, quantity);
              }}
            >
              <AddShoppingCart /> Add to cart
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetail;
