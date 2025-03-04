import { styled } from "..";

export const Container = styled('div', {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
});

export const Header = styled('header', {
    maxWidth: 1180,
    width: '100%',
    padding: '2rem 0',
    margin: '0 auto',
});