import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        zIndex: theme.zIndex.drawer + 1,
        width: '100%',
        //padding: 10,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        borderTop: '1px solid #dbdbdb',
    },
}));
