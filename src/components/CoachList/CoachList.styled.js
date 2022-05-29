import styled from 'styled-components';
import { CoachStyled } from '../Coach/Coach.styled';

export const CoachListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 16px;
`;

export const CoachListHeader = styled(CoachStyled)`
    height: 40px;
    background-color: #dedede;
    border: 2px solid #dedede;
`;