import React from 'react';
import { Image } from '../../atoms/Image/Image.styled';
import { HeaderImage, HeaderStyled } from './Header.styled';

const Header = ({ children }) => {
    return (
        <HeaderStyled>
            <Image src="assets/Adidas_Logo.png" height="60" />
            <h1>{children}</h1>
        </HeaderStyled>
    );
};

export default Header;
