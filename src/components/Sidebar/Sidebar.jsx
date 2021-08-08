import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useStyles from './style';
import MenuScrollSList from './MenuScrollSList';
import MenuRedirectMenu from './MenuRedirectList';
import { Menu, HeadsetMic, Mouse, DesktopMac, Keyboard, DevicesOther } from '@material-ui/icons';

function Sidebar({ categories, slug, mobileOpen, onDrawerToggle }) {

    console.log('mobileOpen', mobileOpen)
    //const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    //const [mobileOpen, setMobileOpen] = React.useState(false);

    // const handleDrawerToggle = () => {
    //     setMobileOpen(!mobileOpen);
    // };

    const setIconCategory = (Slug) => {
        switch (Slug) {
            case "all":
                return <DevicesOther />
                break;
            case "head-phone":
                return <HeadsetMic />
                break;
            case "mouse":
                return <Mouse />
                break;
            case "monitor":
                return <DesktopMac />
                break;
            case "key-board":
                return <Keyboard />
                break;
            default:
                break;
        }
    }

    const drawer = (
        <div className={classes.listItem}>
            <div className={classes.menuTitle}>
                <Menu className={classes.menuTitleText} />
                <Typography className={classes.menuTitleText}>Product category</Typography>
            </div>

            {slug ?
                <MenuRedirectMenu categories={categories} onSetIconCategory={setIconCategory} />
                : <MenuScrollSList categories={categories} onSetIconCategory={setIconCategory} />}
        </div>
    );

    //const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    // container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}

                    onClose={onDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
}

// Sidebar.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default Sidebar;