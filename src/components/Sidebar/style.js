import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 220;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    listItem: {
        paddingTop: 100,

    },
    menuTitle: {
        backgroundColor: '#636363',
        color: 'white',
        borderRadius: 5,
        margin: '0 0.5rem 0 0.5rem',
        textAlign: 'center',
        display: 'flex',
        fontSize: 18,
        //justifyContent:''
    },

    menuTitleText: {
        margin: '5px 10px 5px 10px',
    },
    link: {
        textDecoration: 'none',
        color: '#636363',
    },
}));
