import styled from 'styled-components';
import { PlayerStyled } from '../Player/Player.styled';

export const PlayerListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 16px;
    
`;

export const PlayerListHeader = styled(PlayerStyled)`
    height: 40px;
    background-color: #dedede;
    border: 2px solid #dedede;
`;