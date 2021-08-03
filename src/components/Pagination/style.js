import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    pagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
    },
    ulPage: {
        display: 'flex',
        listStyle: 'none',
    },
    liPage: {
        padding: 10,
        width: 18,
        border: '1px solid #ababab',
        borderRadius: 4,
        backgroundColor: 'transparent',

        color: '#787878',
        fontVariantNumeric: 'inherit',
        fontWeight: '700',
        textAlign: 'center',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '#ababab',
            color: 'white',
        }
    },

    liPageActive: {
        padding: 10,
        borderRadius: 4,
        width: 18,
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#5356fc',
        color: 'white',
        fontWeight: '700',
    },

}))
