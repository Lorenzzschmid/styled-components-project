import styled from 'styled-components'; 

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header}; 
    padding: 40px 0; 
`

export const Nav = styled.nav`
    display: flex; 
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 40px;

    &:hover {
        opacity: 0.9; 
        transform: scale(0.98); 
    }
`

export const Logo = styled.img``