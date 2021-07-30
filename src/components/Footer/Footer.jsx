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
    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
            <Toolbar>
                <Typography variant="h6">@All coppy right reserved to DH gaming gear 2021 </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer
