import styled from 'styled-components';
import { Image } from '../../atoms/Image/Image.styled';

export const HeaderStyled = styled.header`
    display: flex;
    gap: 16px;
    width: 100%;
    height: 80px;
    padding: 10px;
    background-color: lightgray;
`;

export const HeaderImage = styled(Image)`
        max-height:100%; 
        max-width:100%;
`;