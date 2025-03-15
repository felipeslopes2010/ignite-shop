import { styled } from "..";

export const SuccessContainer = styled('main', {
    height: '656px',
    margin: '0 auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    h1: {
      fontSize: '$2xl',
      color: '$gray100',
    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: '560px',
        textAlign: 'center',
        lineHeight: '1.4',
        marginTop: '2rem',
    },

    a: {
        display: 'block',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: '5rem',

        '&:hover': {
            color: '$green300',
        }
    },
});

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '130px',
    height: '145px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.25rem',

    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '8px',
    marginTop: '4rem',

    image: {
        objectFit: 'cover',
    }
});