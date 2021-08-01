import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./style";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Navbar = ({
  total_items,
  isSignedIn,
  user,
  onRefreshProduct,
  setSearchResult,
}) => {
  const classes = useStyles();

  const Username = () => {
    if (!user && isSignedIn == true) return <Spinner />;
    return (
      <NavLink className={classes.link} exact to="/signin">
        {!isSignedIn ? "Signin" : user.displayName}
      </NavLink>
    );
  };

  return (
    <>
      <AppBar className={classes.appBar} position="fixed" color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={classes.title}
            variant="h6"
            color="inherit"
            onClick={onRefreshProduct}
          >
            <img
              src={logo}
              alt="ecommerce"
              className={classes.image}
              height="25px"
            />
            DH Gaming Gear
          </Typography>

          <div className={classes.grow}></div>

          <Username />

          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={total_items} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
