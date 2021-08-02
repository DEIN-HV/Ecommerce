import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddShoppingCart, ShoppingCart } from "@material-ui/icons";
import useStyle from "./style";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <Link
        to={`product-detail/${product.id}`}
        className={classes.imageContainer}
      >
        <div className={classes.imageContainer}>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          ></CardMedia>

          <div className={classes.detailButtonContainer}>
            <Button
              className={classes.detailButton}
              type="button"
              size="large"
              color="secondary"
              variant="outlined"
            >
              View detail
            </Button>
          </div>
        </div>
      </Link>

      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          {product.name}
        </Typography>

        <Typography variant="h6">
          {product.price.formatted_with_symbol}
        </Typography>

        <Typography className={classes.description}
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to cart"
          color="secondary"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
