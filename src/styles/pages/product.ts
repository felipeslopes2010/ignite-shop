import { styled } from "..";

export const ProductContainer = styled('main', {
    maxWidth: '1180px',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',
    margin: '0 auto',
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '576px',
    height: '656px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.25rem',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',

    image: {
        objectFit: 'cover',
    }
});

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        display: 'block',
        marginTop: '1rem',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        color: '$gray300',
        lineHeight: '1.6',
    },

    button: {
        marginTop: 'auto',
        padding: '1.25rem',

        fontSize: '$md',
        fontWeight: 'bold', 
        color: '$white',
        backgroundColor: '$green500',

        border: 'none',
        borderRadius: '8px',

        cursor: 'pointer',

        '&:disabled' : {
            opacity: '0.6',
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': { 
            backgroundColor: '$green300',
        }
    }
});