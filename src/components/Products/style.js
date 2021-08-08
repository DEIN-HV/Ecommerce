import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },

    wrapperContent: {
        // width: '100%',
    },

    productPerCategory: {
        display: 'flex',
        justifyContent: 'space-between',

        width: '100%',
        margin: '30px 0 5px 0',
        backgroundColor: '#DD4132',
        borderRadius: 5,
        color: 'white',
    },

    productPerCategoryTitle: {
        padding: '8px 0 8px 20px',
        fontWeight: 700,
    },

    viewLink: {
        padding: '10px 20px 8px 0',
        fontSize: 18,
        fontWeight: 700,
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',

        '&:hover': {
            opacity: 0.5,
        }
    },
}))
