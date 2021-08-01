import { makeStyles } from '@material-ui/core/styles';

const theme = {
    spacing: 8,
}

export default makeStyles((theme) => ({
    toolBar: theme.mixins.toolbar,

    productDetail: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    imageWrapper: {
        textAlign: 'center',
    },

    productImage: {
        width: '100%',
        maxWidth: 500,
    },

    detailContent: {
        textAlign: 'left',
    },
    groupButton: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '0 0 10px 0',
    },
    button: {
        margin: '0 10px 0 0',
        fontWeight: 700,
    },
    quantityBox: {
        border: '1px solid #828282',
        borderRadius: 5,
        margin: '0 10px 0 0',
        width: 30,
        textAlign: 'center',
    },
}));
