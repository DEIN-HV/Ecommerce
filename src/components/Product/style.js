import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },

    imageContainer: {
        position: 'relative',
        overflow: 'hidden',

        '&:hover': {
            cursor: 'pointer',

            "& $media": {
                transform: 'scale(1.35)',
            },

            "& $detailButtonContainer": {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                opacity: 1,

                "& $detailButton": {
                    transform: 'translateY(0)',
                },
            },
        },
    },

    media: {
        height: '0',
        paddingTop: '80%',
        transition: 'all 0.75s ease 0s',
    },

    detailButtonContainer: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        opacity: 0,
        transition: 'all 0.75s ease 0s',
    },

    detailButton: {
        position: 'absolute',
        top: '45%',
        left: '25%',
        transition: 'all 0.75s ease 0s',
        transform: 'translateY(1.5rem)',
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