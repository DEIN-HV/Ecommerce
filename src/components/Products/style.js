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

    productPerCategory: {
        width: '100%',
        margin: '30px 0 20px 0',
        backgroundColor: '#DD4132',
        borderRadius: 5,
        color: 'white',
    },

    productPerCategoryTitle: {
        padding: '8px 0 8px 20px',
        fontWeight: 700,
    }
}))
