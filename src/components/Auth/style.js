import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolBar: theme.mixins.toolbar,
    title: {
        textAlign: 'center',
    },
    link: {
        fontSize: 20,
        cursor: 'pointer',
        color: 'blue',
        underline: 'none',

        '&:hover': {
            color: '#000033',
        }
    }
}));
