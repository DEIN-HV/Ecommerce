import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },

    media: {
        height: '0',
        paddingTop: '80%',
    },

    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));