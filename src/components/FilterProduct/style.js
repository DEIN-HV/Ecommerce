import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolBar: theme.mixins.toolbar,
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',

    },
    filterBar: {
        margin: '10px 0 0 0',

    },
    link: {

    },
    input: {
        flex: 1,
        marginLeft: 10,
    },

    resultMessage: {
        marginTop: 20,
    },

    searchReult: {
        marginTop: 30,
    },

    formControl: {
        padding: '0px 20px 0 20px',
        textAlign: 'center'
    },

    selectItem: {
        padding: '0px 10px 0 10px',
    }
}));
