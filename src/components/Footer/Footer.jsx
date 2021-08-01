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
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();

  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div className={classes.footer}>
      <p>All &copy; copy rights are reserved to DH Gaming Gear {fullYear}</p>
    </div>
  );
};

export default Footer;
