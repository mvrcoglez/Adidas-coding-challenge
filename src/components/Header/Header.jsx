import React from 'react';
import { HeaderImage, HeaderStyled } from './Header.styled';

const Header = ({ children }) => {
    return (
        <HeaderStyled>
            <HeaderImage src="assets/Adidas_Logo.png" />
            <h1>{children}</h1>
        </HeaderStyled>
    );
};

export default Header;
