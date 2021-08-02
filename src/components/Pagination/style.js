import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    pagination: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    ulPage: {
        display: 'flex',
        listStyle: 'none',
    },
    liPage: {
        padding: 10,
        border: '1px solid black',
        cursor: 'pointer',
    }

}))
